const User = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports.login = async function (req, res) {
  const { email, password } = req.body;

  const candidate = await User.findOne({ email });
  if (candidate) {
    const match = await bcrypt.compare(password, registered.candidate);
    if (match) {
      // token generating
      res.status(200).json({ message: "Welcome" });
    } else {
      res.status(401).json({ message: "Incorrect password... try again" });// 402 Unauthorized
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
      console.log("Error during saving new user to DB: ", user);
      res.status(500).json({ message: "Error during saving new user to DB" });
    }
  }
};
