const bcrypt = require("bcrypt");

//how to Safely Store a password
async function run() {
  // salt hye random string added before or after the password
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash("1234", salt);
  console.log(salt);
  console.log(hashed);
}

run();
