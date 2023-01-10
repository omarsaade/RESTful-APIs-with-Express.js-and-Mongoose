// const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  const db = config.get("db");
  mongoose.connect(
    db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Successful");
      }
    }
  );
};

// const winston = require("winston");
// const mongoose = require("mongoose");

// module.exports = function () {
//   mongoose
//     .connect("mongodb://localhost/vidly")
//     .then(() => winston.info("Connected to MongoDB..."));
//   // .then(() => console.log("Connected to MongoDB..."))
// };
