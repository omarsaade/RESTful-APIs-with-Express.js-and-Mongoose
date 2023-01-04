const winston = require("winston");
/* this function catches any errors in the request processing pipeline 
..shaglta bas ta3mul handle bel error processing pipeline
he ma 5assa be ger el express(processing pipeline yaane bel routes)
 */
module.exports = function (err, req, res, next) {
  //for logging error
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
