const express = require("express");
const router = express.Router({ mergeParams: true });

const Controller = require("../controllers/color.controller");

router.get("/", Controller.getList);
router.get("/id", Controller.getListByIds);

module.exports = router;
