module.exports = function (err, req, res, next) {
  // 500 : internal server error
  res.status(500).send("Something failed");
};
