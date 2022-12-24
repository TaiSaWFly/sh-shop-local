const express = require("express");
const router = express.Router({ mergeParams: true });
const { check } = require("express-validator");

const Controller = require("../controllers/review.controller");

router.get("/", Controller.getList);
router.get(
  "/:productId",

  Controller.getListByProductId
);
router.post(
  "/",
  [
    check("content", "The field is required to fill")
      .trim()
      .isLength({ min: 1 }),
  ],
  Controller.create
);
router.delete("/:id", Controller.delete);

module.exports = router;
