const mongoose = require("mongoose");
const config = require("config");
const db =
  "mongodb+srv://omar:omaromar@cluster0.l9nezt7.mongodb.net/tt?retryWrites=true&w=majority";
mongoose.connect(db, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
  }
});
