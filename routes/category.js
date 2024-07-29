const express = require("express");
const passport = require('passport')
const controller = require("../controllers/category");
const router = express.Router();

router.get("/", passport.authenticate("jwt", {session: false}
  ), controller.getAll); // passport middleware that cheks if valid token. to protect route from unauthorized access

router.get("/:id", controller.getByIdGet);


router.post("/", controller.create);

router.patch("/:id", controller.update);
router.delete("/:id", controller.remove);


module.exports = router;
