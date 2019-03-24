const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const checkJWT = require("../middlewares/check-jwt");
const Order = require("../models/order");

router.post("/signup", (req, res) => {
  const user = new User(req.body);
  user.picture = user.gravatar();

  User.findOne({ email: req.body.email })
    .then(userData => {
      if (userData) {
        return res.json({
          success: false,
          message: "Account with that email is already exist"
        });
      } else {
        user.save().then(data => {
          const token = jwt.sign({ user: data }, process.env.SECRET, {
            expiresIn: "1d"
          });

          return res.json({
            success: true,
            message: "Enjoy your token",
            token
          });
        });
      }
    })
    .catch(err => res.json(err));
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then(async user => {
      // console.log(user);
      if (!user) {
        return res.json({
          success: false,
          message: "Authenticated failed, User not found"
        });
      }
      const validPassword = await user.comparePassword(req.body.password);

      if (validPassword) {
        const token = jwt.sign({ user }, process.env.SECRET, {
          expiresIn: "1d"
        });

        return res.json({
          success: true,
          message: "Enjoy your token",
          token
        });
      } else {
        return res.json({
          success: false,
          message: "Authentication failed. Wrong password"
        });
      }
    })
    .catch(err => res.json(err));
});

router
  .route("/profile")
  .get(checkJWT, (req, res) => {
    User.findById(req.user._id)
      .then(user => {
        return res.json({
          success: true,
          user,
          message: "Successfull"
        });
      })
      .catch(err => res.json(err));
  })
  .post(checkJWT, async (req, res) => {
    // const { name, email, password, isSeller } = req.body;
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    User.findByIdAndUpdate(req.user._id, { $set: req.body }, { new: true })
      .then(user => {
        return res.json({
          success: true,
          message: "Successfully edited your profile"
        });
      })
      .catch(err => res.json(err));
  });

router
  .route("/address")
  .get(checkJWT, (req, res) => {
    User.findById(req.user._id)
      .then(user => {
        return res.json({
          success: true,
          address: user.address,
          message: "Successfull"
        });
      })
      .catch(err => res.json(err));
  })
  .post(checkJWT, (req, res) => {
    User.findByIdAndUpdate(
      req.user._id,
      {
        $set: {
          address: req.body
        }
      },
      { new: true }
    )
      .then(user => {
        return res.json({
          success: true,
          message: "Successfully edited your profile"
        });
      })
      .catch(err => res.json(err));
  });

router.get("/orders", checkJWT, (req, res, next) => {
  Order.find({ owner: req.user._id })
    .populate("products.product")
    .populate("owner")
    .exec((err, orders) => {
      if (err) {
        res.json({
          success: false,
          message: "Couldn't find your order"
        });
      } else {
        res.json({
          success: true,
          message: "Found your order",
          orders: orders
        });
      }
    });
});

router.get("/orders/:id", checkJWT, (req, res, next) => {
  Order.findOne({ _id: req.params.id })
    .deepPopulate("products.product.owner")
    .populate("owner")
    .exec((err, order) => {
      if (err) {
        res.json({
          success: false,
          message: "Couldn't find your order"
        });
      } else {
        res.json({
          success: true,
          message: "Found your order",
          order: order
        });
      }
    });
});

module.exports = router;
