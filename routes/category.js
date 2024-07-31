const express = require("express");
const passport = require("passport");
const upload = require("../middleware/upload");
const controller = require("../controllers/category");
const router = express.Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.getAll
); // passport middleware that cheks if valid token. to protect route from unauthorized access

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.getByIdGet
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
 upload.single("image"),
  controller.create
); // middleware for ing upload handling

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  controller.update
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.remove
);

module.exports = router;
