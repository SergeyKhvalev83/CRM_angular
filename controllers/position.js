module.exports.getByCategoryId = function (req, res) {
  res.status(200).json({ position: "GET ORDER CATEGORY" });
};

module.exports.create = function (req, res) {
  res.status(200).json({ position: "POST POSITION" });
};

module.exports.remove = function (req, res) {
  res.status(200).json({ position: "DELETE POSITION" });
};
module.exports.update = function (req, res) {
  res.status(200).json({ position: "PATCH POSITION" });
};