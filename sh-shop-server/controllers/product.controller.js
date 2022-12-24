const ProductService = require("../services/product.service");

const CollectionCategoryService = require("../services/collectionCategory.service");
const CollectionService = require("../services/collection.service");
const CategoryService = require("../services/category.service");

exports.getList = async function (req, res) {
  try {
    const data = await ProductService.getList();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};

exports.getListByCollectionPath = async function (req, res) {
  try {
    const { collectionPath } = req.params;
    const { limit, withOutIds } = req.body;

    const collection = await CollectionService.getCollectionByPath(
      collectionPath
    );
    const products = await ProductService.getListByCollectionIdAndFilter(
      collection._id,
      limit,
      withOutIds
    );

    res.status(200).json({
      status: 200,
      content: products,
      message: "Succesfully Product Retrieved",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};

exports.getListByCollectionAndCategory = async function (req, res) {
  try {
    const { collectionPath, categoryPath } = req.params;
    const { limit, withOutIds } = req.body;

    const collection = await CollectionService.getCollectionByPath(
      collectionPath
    );
    const category = await CategoryService.getCategoryByPath(categoryPath);
    const products = await ProductService.getListByCollectionAndCategories(
      collection._id,
      category._id,
      limit,
      withOutIds
    );

    res.status(200).json({
      status: 200,
      content: products,
      message: "Succesfully Product Retrieved",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};

exports.getListByIds = async function (req, res) {
  try {
    const ids = req.body;
    const data = await ProductService.getListByIds(ids);

    res.status(200).json({
      status: 200,
      content: data,
      message: "Succesfully Product Retrieved",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};

exports.getListNewArrivals = async function (req, res) {
  try {
    const data = await ProductService.getListNewArrivals();
    res.status(200).json({
      status: 200,
      content: data,
      message: "Succesfully Product Retrieved",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};

exports.getListProductLengthByCollectionAndCategory = async function (
  req,
  res
) {
  try {
    const collectionCategories = await CollectionCategoryService.getList();

    const data = await Promise.all(
      collectionCategories.map(async (c) => {
        let newData = {
          _id: c.collectionId,
          allProductslength: 0,
          currentLength: 0,
          categories: [],
        };

        const products = await ProductService.getListByCollectionId(
          c.collectionId
        );
        newData.allProductslength = products.length;

        const dataCategories = await Promise.all(
          c.categories.map(async (cat) => {
            let dataCategories = { _id: cat, length: 0 };

            const products =
              await ProductService.getListByCollectionIdAndCategoryId(
                c.collectionId,
                cat
              );
            dataCategories.length = products.length;

            return dataCategories;
          })
        );

        newData.categories = dataCategories;

        const reduceCategoriesLength = dataCategories.reduce((acc, cat) => {
          return acc + cat.length;
        }, 0);

        newData.currentLength =
          reduceCategoriesLength !== 0
            ? reduceCategoriesLength
            : newData.allProductslength;

        return newData;
      })
    );

    res.status(200).json({
      status: 200,
      content: data,
      message: "Succesfully Product Retrieved",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};

///////////////////////////////////////////////////////////////////////

exports.getListLimitAndId = async function (req, res) {
  try {
    const { limit, withOutIds } = req.body;

    const data = await ProductService.getListLimitAndId(limit, withOutIds);
    res.status(200).send(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
};
