const express = require("express");
const router = express.Router();
const upload = require("../middlewares/image");
const checkJWT = require("../middlewares/check-jwt");
const Product = require("../models/product");
const faker = require("faker");

router
  .route("/products")
  .get(checkJWT, (req, res) => {
    Product.find({ owner: req.user._id })
      .populate("owner")
      .populate("category")
      .then(products => {
        res.json({
          success: true,
          message: "Products",
          products
        });
      });
  })
  .post(checkJWT, upload.single("product_picture"), (req, res) => {
    const { categoryId, title, price, description } = req.body;
    console.log(req.file.location);

    let product = new Product({
      owner: req.user._id,
      category: categoryId,
      title,
      price,
      description,
      image: req.file.location
    });

    product.save().then(data => {
      return res.json({
        success: true,
        message: "Successful Added the product"
      });
    });
  });

// router.get("/faker/test", checkJWT, (req, res) => {
//   for (let i = 0; i < 20; i++) {
//     let product = new Product({
//       owner: req.user._id,
//       category: "5c95fa08c217c91d14dad798",
//       image: faker.image.avatar(),
//       title: faker.commerce.productName(),
//       description: faker.lorem.words(),
//       price: faker.commerce.price()
//     });

//     product.save();
//   }

//   res.json({
//     message: "Success added 20 prictures"
//   });
// });

module.exports = router;
