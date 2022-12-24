const express = require("express");
const router = express.Router({ mergeParams: true });

const Controller = require("../controllers/collectionCategory.controller");

router.get("/", Controller.getList);
router.get("/:id", Controller.getCategoryByCollectionCategoryId);

module.exports = router;
