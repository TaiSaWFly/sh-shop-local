const express = require("express");
const router = express.Router({ mergeParams: true });

const Controller = require("../controllers/product.controller");

router.get("/", Controller.getList);
router.get(
  "/productLength",
  Controller.getListProductLengthByCollectionAndCategory
);
router.get("/newArrivals", Controller.getListNewArrivals);

router.post("/", Controller.getListByIds);
router.post("/by/:collectionPath", Controller.getListByCollectionPath);
router.post(
  "/by/:collectionPath/:categoryPath",
  Controller.getListByCollectionAndCategory
);

module.exports = router;
