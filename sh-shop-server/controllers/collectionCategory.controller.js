const CollectionCategoryService = require("../services/collectionCategory.service");
const CollectionService = require("../services/collection.service");
const transformCollectionCategoryData = require("../utils/transformCollectionCategoryData");

exports.getList = async function (req, res) {
  try {
    const collectionCategories = await CollectionCategoryService.getList();
    const collectionIds = collectionCategories.map((m) => m.collectionId);
    const collections = await CollectionService.getListByIds(collectionIds);

    const data = transformCollectionCategoryData(
      collectionCategories,
      collections
    );

    res.status(200).json({
      status: 200,
      content: data,
      message: "Succesfully Collection Category Retrieved",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};

exports.getCategoryByCollectionCategoryId = async function (req, res) {
  const { id } = req.params;
  const collectionCategory = await CollectionCategoryService.getListByIds(id);

  const data = collectionCategory;
  try {
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};
