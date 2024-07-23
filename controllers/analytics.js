module.exports.overview = function (req, res) {
  res.status(200).json({ analytycs_overview: "from controller" });
};

module.exports.analitics = function (req, res) {
  res.status(200).json({ analytycs_analitics: "from controller" });
};