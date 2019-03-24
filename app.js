require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const accountRouter = require("./routes/account");
const mainRouter = require("./routes/main");
const sellerRouter = require("./routes/seller");
const productSearchRouter = require("./routes/product-search");

const compression = require("compression");

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch(err => {
    console.error(err);
  });

const app = express();
app.use(compression());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", mainRouter);
app.use("/api/accounts", accountRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/search", productSearchRouter);

// if (process.env.NODE_ENV === "production") {
const appPath = path.join(__dirname, "dist/frontend");
app.use(express.static(appPath));

app.get("*", function(req, res) {
  res.sendFile(path.resolve(appPath, "index.html"));
});
// }

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
