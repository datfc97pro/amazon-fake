const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token = req.headers["authorization"];

  if (token) {
    jwt.verify(token, process.env.SECRET, function(err, decoced) {
      if (err) {
        return res.json({
          success: false,
          message: "Failed to authenticate token"
        });
      }

      req.user = decoced.user;
      next();
    });
  } else {
    return res.status(403).json({
      success: false,
      message: "No token provided"
    });
  }
};
