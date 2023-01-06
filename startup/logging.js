const winston = require("winston");
// require("winston-mongodb");
require("express-async-errors");

module.exports = function () {
  /*
process hye event emitter
this event is raised when we have an exception
how to handle an uncaught exception ?
             2
          this approach will only work with sychrounous code
so if we have promise somewhere and that promise is rejected the code below
will not executed
*/
  // process.on("uncaughtException", (ex) => {
  //   //log the error using winston
  //   winston.error(ex.message, ex);
  //   process.exit(1);
  // });

  /*

               code for handling and logging errors

*/
  // step 2
  // he bta3mul log and terminate
  winston.handleExceptions(
    new winston.transports.File({
      filename: "uncaughtExceptions.log",
    })
  );

  process.on("unhandledRejection", (ex) => {
    //log the error using winston
    // winston.error(ex.message, ex);
    // process.exit(1);

    // 1-hala2 bisir fi unhandeled exexption..winston fo2 lah ta3mul caught
    //log it in ur file and terminate the process

    // step 1
    throw ex;
  });

  /*
                    1
    he mnesta3mela iza ma 2derna nemseka bel try catch block
  how to caught is exception (its not related to express)
  // normal error
  throw new Error("Errors");
  
  */

  // reject promise example
  // const p = Promise.reject(new Error("something failed miserably!"));
  // p.then(() => console.log("Done"));

  winston.add(winston.transports.File, { filename: "logfile.log" });
  // winston.add(winston.transports.MongoDB, {
  //   db: "mongodb://localhost/vidly",
  //   //ONLY ERROR MESSAGE WILL BE LOGGED
  //   //IZA HATET LEVEL INFO..LAH YEN3AML LOG LA INFO W KELSHI ABLA (WARN ERROR)
  //   level: "error",
  // });
};
