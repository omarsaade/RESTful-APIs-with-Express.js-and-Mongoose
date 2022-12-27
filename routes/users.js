// new route to register a new user
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User, validate } = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

//auth yaane authorization
router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //this return a promise so we awaited and get the user object
  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send("User already Registered");

  let picko = _.pick(req.body, ["name", "email", "password"]);
  user = new User(picko);

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  /*
  u can use joi password complexity for validating a password  
    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
*/
  await user.save();
  // .pick() btraje3lna new object with those 2 props name and email
  let pick = _.pick(user, ["_id", "name", "email"]);
  // we are gonna modified the response of this api endpoint to not returning
  //the password
  // meth1
  // res.send(pick);
  // const token = jwt.sign({ _id: user._id }, config.get("jwtPrivateKey"));
  const token = user.generateAuthToken();
  // with res.header we can set a header
  //         name of the header , value
  //  Now We set this header and then send this response to the client
  res.header("x-auth-token", token).send(pick);

  //meth2
  /*
  res.send({
    name: user.name,
    email: user.email,
  });
  */
});

module.exports = router;
