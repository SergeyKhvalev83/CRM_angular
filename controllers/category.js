module.exports.getAll = function (req, res) {
  res.status(200).json({ category: "GET ALL CATEGORIES" });
};

module.exports.getByIdGet = function (req, res) {
  res.status(200).json({ categoryId: "from controller" });
};

module.exports.remove = function (req, res) {
  res.status(200).json({ categoryIdDelete: "from controller" });
};

module.exports.create = function (req, res) {
  res.status(200).json({ categoryIdPost: "from controller" });
};

module.exports.update = function (req, res) {
  res.status(200).json({ categoryIdPatch: "from controller" });
};