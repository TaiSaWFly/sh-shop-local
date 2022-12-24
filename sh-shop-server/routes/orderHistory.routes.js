const express = require("express");
const router = express.Router({ mergeParams: true });

const Controller = require("../controllers/orderHistory.controller");

router.get("/", Controller.getList);
router.get("/:userId", Controller.getListById);
router.post("/", Controller.create);

module.exports = router;
