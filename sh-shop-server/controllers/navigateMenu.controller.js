const NavigateMenuService = require("../services/navigateMenu.service");
const CollectionCategoryService = require("../services/collectionCategory.service");
const CollectionService = require("../services/collection.service");

const transformMenuData = require("../utils/transformMenuData");

exports.getList = async function (req, res) {
  try {
    const menus = await NavigateMenuService.getList();
    const collectionCategories = await CollectionCategoryService.getList();
    const collectionIds = menus.map((m) => m.collectionId);
    const collections = await CollectionService.getListByIds(collectionIds);

    const data = transformMenuData(menus, collections, collectionCategories);

    res.status(200).json({
      status: 200,
      content: data,
      message: "Succesfully Navigate Menus Retrieved",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};
