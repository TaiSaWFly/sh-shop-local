const CollectionService = require("../services/collection.service");
const CollectionCategoryService = require("../services/collectionCategory.service");
const CategoryService = require("../services/category.service");
const ProductService = require("../services/product.service");

const transformDataByCollectionAndCategories = require("../utils/transformDataByCollectionAndCategories");

exports.getList = async function (req, res) {
  try {
    const data = await CollectionService.getList();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};

exports.getCollectionByPath = async function (req, res) {
  try {
    const { path } = req.params;

    const collection = await CollectionService.getCollectionByPath(path);
    const collectionCategory = await CollectionCategoryService.getListById(
      collection._id
    );

    if (collectionCategory) {
      const caterories = await CategoryService.getListByIds(
        collectionCategory.categories
      );

      const products =
        await ProductService.getTransformedListByCollectionAndCategories(
          collection._id,
          collectionCategory.categories
        );

      const data = transformDataByCollectionAndCategories(
        collection,
        caterories,
        products
      );

      res.status(200).json({
        status: 200,
        content: data,
        message: "Succesfully Collection Retrieved",
      });
    } else {
      const products = await ProductService.getListByCollectionId(
        collection._id
      );

      const data = {
        _id: collection._id,
        name: collection.name,
        path: collection.path,
        products: products,
      };

      res.status(200).json({
        status: 200,
        content: data,
        message: "Succesfully Collection Retrieved",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};
