const config = require("config");

module.exports = function () {
  if (!config.get("jwtPrivateKey")) {
    throw new Error("FATAL ERROR: jwtPrivateKey is not defined.");
    /*

    no need to use console.error and exit,,cz we have winston
         she will do what we are preparing
    console.error("FATAL ERROR: jwtPrivateKey is not defined.");
    //0 btaane success , 1 and 2 failure
    process.exit(1);
    */
  }
};
