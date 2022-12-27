// new route to register a new user
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User, validate } = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //this return a promise so we awaited and get the user object
  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send("User already Registered");

  user = new User(_.pick(req.body, ["name", "email", "password"]));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  //   user = new User({
  //     name: req.body.name,
  //     email: req.body.email,
  //     password: req.body.password,
  //   });

  await user.save();
  // .pick() btraje3lna new object with those 2 props name and email
  let pick = _.pick(user, ["_id", "name", "email"]);
  // we are gonna modidied the response of this api endpoint to not returning
  //the password
  // meth1
  res.send(pick);

  //meth2
  /*
  res.send({
    name: user.name,
    email: user.email,
  });
  */
});

module.exports = router;
