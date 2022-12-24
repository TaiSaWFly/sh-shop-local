const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes")); //
router.use("/user", require("./user.routes")); //
router.use("/color", require("./color.routes")); //
router.use("/category", require("./category.routes")); //
router.use("/collection", require("./collection.routes")); //
router.use("/collectionCategory", require("./collectionCategory.routes")); //
router.use("/navigateMenu", require("./navigateMenu.routes")); //
router.use("/size", require("./size.routes")); //
router.use("/product", require("./product.routes")); //
router.use("/popular", require("./popular.routes")); //
router.use("/orderHistory", require("./orderHistory.routes")); //
router.use("/orderRequest", require("./orderRequest.routes")); //
router.use("/review", require("./review.routes")); //

module.exports = router;
