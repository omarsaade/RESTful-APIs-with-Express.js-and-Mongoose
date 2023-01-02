//he el file mohemeta tet2akad iza fik ta3mul el post get"genres" par example
// min 5ilel el ta2akod men wujud el token.
// w ta3mela verify

const jwt = require("jsonwebtoken");
const config = require("config");
//autorization
// function auth(req, res, next) {
module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    // decoded payload : btarje3 el id taba3 el user (payload)
    //verify this is  a valid token
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    //         {_id:dsjhdjsd}
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};

// module.exports = auth;
