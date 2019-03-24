const express = require("express");
const router = express.Router();
const Category = require("../models/category");
const Review = require("../models/review");
const Product = require("../models/product");
const async = require("async");
const stripe = require("stripe")(process.env.STRIPE);
const Order = require("../models/order");

const checkJWT = require("../middlewares/check-jwt");

router.get("/products", (req, res, next) => {
  const perPage = 10;
  const page = req.query.page;

  async.parallel(
    [
      function(callback) {
        Product.count({}, (err, count) => {
          var totalProducts = count;
          callback(err, totalProducts);
        });
      },
      function(callback) {
        Product.find({})
          .skip(perPage * page)
          .limit(perPage)
          .populate("category")
          .populate("owner")
          .populate("reviews")
          .exec((err, products) => {
            if (err) return next(err);
            callback(err, products);
          });
      }
    ],
    function(err, results) {
      var totalProducts = results[0];
      var products = results[1];
      res.json({
        success: true,
        message: "category",
        products: products,
        totalProducts: totalProducts,
        pages: Math.ceil(totalProducts / perPage)
      });
    }
  );
});

router
  .route("/categories")
  .get((req, res) => {
    Category.find({}).then(categories => {
      return res.json({
        success: true,
        message: "Successful",
        categories
      });
    });
  })
  .post((req, res) => {
    let category = new Category(req.body);

    category.save().then(data => {
      return res.json({
        success: true,
        message: "Successful"
      });
    });
  });

router.get("/categories/:id", (req, res, next) => {
  const perPage = 10;
  const page = req.query.page;

  async.parallel(
    [
      function(callback) {
        Product.count({ category: req.params.id }, (err, count) => {
          var totalProducts = count;
          callback(err, totalProducts);
        });
      },
      function(callback) {
        Product.find({ category: req.params.id })
          .skip(perPage * page)
          .limit(perPage)
          .populate("category")
          .populate("owner")
          .populate("reviews")
          .exec((err, products) => {
            if (err) return next(err);
            callback(err, products);
          });
      },
      function(callback) {
        Category.findOne({ _id: req.params.id }, (err, category) => {
          callback(err, category);
        });
      }
    ],
    function(err, results) {
      var totalProducts = results[0];
      var products = results[1];
      var category = results[2];
      res.json({
        success: true,
        message: "category",
        products: products,
        categoryName: category.name,
        totalProducts: totalProducts,
        pages: Math.ceil(totalProducts / perPage)
      });
    }
  );
});

router.get("/product/:id", (req, res, next) => {
  Product.findById(req.params.id)
    .populate("category")
    .populate("owner")
    .deepPopulate("reviews.owner")
    .then(product => {
      if (product) {
        return res.json({
          success: true,
          product
        });
      }
    })
    .catch(err =>
      res.json({ success: false, message: "Product is not found" })
    );
});

router.post("/review", checkJWT, (req, res) => {
  async.waterfall([
    function(callback) {
      Product.findOne({ _id: req.body.productId }, (err, product) => {
        if (product) {
          callback(err, product);
        }
      });
    },
    function(product) {
      const { title, description, rating } = req.body;

      let review = new Review({
        owner: req.user._id,
        title,
        description,
        rating
      });

      product.reviews.push(review._id);
      product.save().then(() => {
        review.save().then(() => {
          return res.json({
            success: true,
            message: "Successfully added the review"
          });
        });
      });
    }
  ]);
});

router.post("/payment", checkJWT, (req, res, next) => {
  const stripeToken = req.body.stripeToken;
  const currentCharges = Math.round(req.body.totalPrice * 100);

  stripe.customers
    .create({
      source: stripeToken.id
    })
    .then(function(customer) {
      return stripe.charges.create({
        amount: currentCharges,
        currency: "usd",
        customer: customer.id
      });
    })
    .then(function(charge) {
      const products = req.body.products;

      let order = new Order();
      order.owner = req.user._id;
      order.totalPrice = currentCharges;

      products.map(product => {
        order.products.push({
          product: product.product,
          quantity: product.quantity
        });
      });

      order.save().then(() =>
        res.json({
          success: true,
          message: "Successfully made a payment"
        })
      );
    });
});

module.exports = router;
