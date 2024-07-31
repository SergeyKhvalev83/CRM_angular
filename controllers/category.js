const Category = require("../models/Category");
const Positions = require("../models/Position");
const errorHandler = require("../utils/errorHandler");

module.exports.getAll = async function (req, res) {
  // we looking for catigories created by specific user here
  try {
    const categories = await Category.find({ user: req.user.id });
    res.status(200).json(categories);
  } catch (err) {
    errorHandler(res, err);
  }
};

module.exports.getByIdGet = async function (req, res) {
  try {
    const category = await Category.findById(req.params.id); // we can skip user.id as search params, because each category have unique id
    res.status(200).json(category);
  } catch (err) {
    errorHandler(res, err);
  }
};

module.exports.remove = async function (req, res) {
  try {
    await Category.remove({ _id: req.params.id });
    // we also need to remove all positions relevant already removed category
    await Positions.remove({ category: req.params.id });
    res
      .status(200)
      .json({ message: "category and relevant positions were deleted" });
  } catch (err) {
    errorHandler(res, err);
  }
};

module.exports.create = async function (req, res) {
  try {
    const category = new Category({
      name: req.body.name,
      user: req.user.id,
      imageSrc: req.file ? req.file.path : "", // because we applied middleware to relevant router that processes a single file associated with the given form field. The Request object will be populated with a file object containing information about the processed file. file upload not mandatory, that why we use ternary
    });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    errorHandler(res, err);
  }
};

module.exports.update = async function (req, res) {
  const update = {
    name: req.body.name,
  }

  if(update.file){ // if file object added by multer middleware => add new property in update object responsible for img path
    update.imageSrc = req.file.path
  }
  try {
    const category = await Category.findOneAndUpdate(
      { _id: req.params.id },
      { $set: update },
      { new: true }
    );
    res.status(200).json(category);
  } catch (err) {
    errorHandler(res, err);
  }
};
