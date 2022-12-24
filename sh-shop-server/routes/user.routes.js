const express = require("express");
const router = express.Router({ mergeParams: true });

const Controller = require("../controllers/user.controller");

router.get("/:id", Controller.getUser);
router.patch("/:id", Controller.userUpdate);

module.exports = router;
