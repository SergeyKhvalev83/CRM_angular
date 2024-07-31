const multer = require("multer");
const moment = require("moment");

// configuration of storage for multer
const storage = multer.diskStorage({
  // function handle where store
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  // help to define filename
  filename(req, file, cb) {
    const date = moment().format("DDMMYYYY-HHmmss_SSS"); // to form filename which fitsh to any OS
    cb(null, `${date}-${file.originalname}`);
  },
});

//for file validation
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const limits = {
  fileSize: 1024 * 1024 * 5
}

module.exports = multer({ storage, fileFilter, limits});
