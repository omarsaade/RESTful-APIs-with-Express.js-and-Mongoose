const jwt = require("jsonwebtoken");
const config = require("config");

// function auth(req, res, next) {
module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    // decoded payload : btarje3 el id taba3 el user
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    //         {_id:dsjhdjsd}
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};

// module.exports = auth;
