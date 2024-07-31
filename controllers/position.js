const Position = require("../models/Position");
const errorHandler = require("../utils/errorHandler");

module.exports.getByCategoryId = async function (req, res) {
  try {
    // we perform search by two parameters
    const positions = await Position.find({
      category: req.params.categoryId, // each position has category. client will send category in params
      user: req.user.id, // req.user.id come from passport middleware
    });
    res.status(200).json(positions); // send back found positions
  } catch (error) {
    errorHandler(res, e);
  }
};

module.exports.create = async function (req, res) {
  try {
    const position = await new Position({
      name: req.body.name,
      cost: req.body.cost,
      category: req.body.category,
      user: req.user.id,
    }).save();
    res.status(201).json(position);
  } catch (error) {
    errorHandler(res, e);
  }
};

module.exports.remove = async function (req, res) {
  try {
    await Position.remove({ _id: req.params.id });
    res.status(200).json({ message: "position deleted" });
  } catch (error) {
    errorHandler(res, e);
  }
};
module.exports.update = async function (req, res) {
  try {
    const position = await Position.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true } // that flag we need to return in res updated object
    );

    res.status(200).json(position);// return updated object
  } catch (error) {
    errorHandler(res, e);
  }
};


