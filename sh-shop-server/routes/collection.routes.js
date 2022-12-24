const express = require("express");
const router = express.Router({ mergeParams: true });

const Controller = require("../controllers/collection.controller");

router.get("/", Controller.getList);
router.get("/:path", Controller.getCollectionByPath);

module.exports = router;
