const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  const db = config.get("db");
  mongoose
    .connect(config.get("db"))
    .then(() => winston.info(`Connected to ${db}...`));
  // .then(() => console.log("Connected to MongoDB..."))
};

// const winston = require("winston");
// const mongoose = require("mongoose");

// module.exports = function () {
//   mongoose
//     .connect("mongodb://localhost/vidly")
//     .then(() => winston.info("Connected to MongoDB..."));
//   // .then(() => console.log("Connected to MongoDB..."))
// };
