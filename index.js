// const logger = require("./config/logger");
// require("express-async-errors");
// const winston = require("winston");
require("winston-mongodb");
// const error = require("./middleware/error");
// const config = require("config");
// const Joi = require("joi");
// Joi.objectId = require("joi-objectid")(Joi);
// const mongoose = require("mongoose");
// const genres = require("./routes/genres");
// const customers = require("./routes/customers");
// const movies = require("./routes/movies");
// const rentals = require("./routes/rentals");
// const users = require("./routes/users");
// const auth = require("./routes/auth");
// const winston = require("winston");
const winston = require("winston");

const express = require("express");
const app = express();
//we put the logging first
require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();
require("./startup/prod")(app);
require("dotenv").config();
// /*
// process hye event emitter
// this event is raised when we have an exception
// how to handle an uncaught exception ?
//              2
//           this approach will only work with sychrounous code
// so if we have promise somewhere and that promise is rejected the code below
// will not executed
// */
// // process.on("uncaughtException", (ex) => {
// //   //log the error using winston
// //   winston.error(ex.message, ex);
// //   process.exit(1);
// // });

// /*

//                code for handling and logging errors

// */
// // step 2
// // he bta3mul log and terminate
// winston.handleExceptions(
//   new winston.transports.File({
//     filename: "uncaughtExceptions.log",
//   })
// );

// process.on("unhandledRejection", (ex) => {
//   //log the error using winston
//   // winston.error(ex.message, ex);
//   // process.exit(1);

//   // 1-hala2 bisir fi unhandeled exexption..winston fo2 lah ta3mul caught
//   //log it in ur file and terminate the process

//   // step 1
//   throw ex;
// });

// /*
//                   1
//   he mnesta3mela iza ma 2derna nemseka bel try catch block
// how to caught is exception (its not related to express)
// // normal error
// throw new Error("Errors");

// */

// // reject promise example
// // const p = Promise.reject(new Error("something failed miserably!"));
// // p.then(() => console.log("Done"));

// winston.add(winston.transports.File, { filename: "logfile.log" });
// winston.add(winston.transports.MongoDB, {
//   db: "mongodb://localhost/vidly",
//   //ONLY ERROR MESSAGE WILL BE LOGGED
//   //IZA HATET LEVEL INFO..LAH YEN3AML LOG LA INFO W KELSHI ABLA (WARN ERROR)
//   level: "error",
// });

// if (!config.get("jwtPrivateKey")) {
//   console.error("FATAL ERROR: jwtPrivateKey is not defined.");
//   //0 btaane success , 1 and 2 failure
//   process.exit(1);
// }

// mongoose
//   .connect("mongodb://localhost/vidly")
//   .then(() => console.log("Connected to MongoDB..."))
//   .catch((err) => console.error("Could not connect to MongoDB...", err));

// app.use(express.json());
// app.use("/api/genres", genres);
// app.use("/api/customers", customers);
// app.use("/api/movies", movies);
// app.use("/api/rentals", rentals);
// app.use("/api/users", users);
// app.use("/api/auth", auth);
// app.use(error);

const port = process.env.PORT || 3000;
// app.listen(port, () => winston.info(`Listening on port ${port}...`));
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;

// app.listen(port, () => console.log(`Listening on port ${port}...`));
