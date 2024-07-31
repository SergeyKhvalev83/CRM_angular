const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const keys = require("../config/keys");
const errorHandler = require("../utils/errorHandler");

module.exports.login = async function (req, res) {
  const { email, password } = req.body;
  console.log("USER LOG IN!!!!!!!!!");

  const candidate = await User.findOne({ email });
  if (candidate) {
    const match = bcrypt.compareSync(password, candidate.password);
    if (match) {
      // token generating
      const token = jwt.sign(
        {
          email: candidate.email,
          userId: candidate._id,
        },
        keys.jwt,
        { expiresIn: 60 * 60 }
      );

      res.status(200).json({ token: `Bearer ${token}` });
    } else {
      res.status(401).json({ message: "Incorrect password... try again" }); // 402 Unauthorized
    }
  } else {
    res.status(404).json({ message: "User not found, please register" }); // 404 Not found
  }
};

module.exports.register = async function (req, res) {
  // email
  //password
  const candidate = await User.findOne({ email: req.body.email });
  if (candidate) {
    res.status(409).json({ message: "User already created" }); // 409 - conflict
  } else {
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt),
    });
    try {
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      errorHandler(res, error);
    }
  }
};
