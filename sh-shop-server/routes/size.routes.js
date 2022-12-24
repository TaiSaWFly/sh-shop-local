const express = require("express");
const router = express.Router({ mergeParams: true });

const Controller = require("../controllers/size.controller");

router.get("/", Controller.getList);

module.exports = router;
