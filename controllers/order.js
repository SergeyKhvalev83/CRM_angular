module.exports.getAll = function (req, res) {
  res.status(200).json({ order: "GET ORDER" });
};

module.exports.create = function (req, res) {
  res.status(200).json({ order: "CREATE ORDER" });
};
