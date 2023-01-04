const winston = require("winston");

module.exports = function (err, req, res, next) {
  //logging error
  winston.error(err.message, err);
  //error
  //warn
  //info
  //verbose
  //debug
  //silly

  // 500 : internal server error
  res.status(500).send("Something failed");
};
