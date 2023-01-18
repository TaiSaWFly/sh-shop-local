const Product = require("../models/Product");

const transformProductDataByCategories = require("../utils/transformProductDataByCategories");
const productsWithOutReqIds = require("../utils/productsWithOutReqIds");
const transformDataToIds = require("../utils/transformDataToIds");

exports.getList = async function () {
  try {
    const data = await Product.find();
    return data;
  } catch (error) {
    throw Error("Unexpected error Product");
  }
};

exports.getListByCollectionId = async function (collectionId) {
  try {
    const data = await Product.find({ collectionId });
    return data;
  } catch (error) {
    throw Error("Unexpected error Product");
  }
};

exports.getListByCollectionIdAndFilter = async function (
  collectionId,
  limit,
  withOutIds
) {
  try {
    const products = await Product.find({ collectionId });

    const productsReqWithOutIds = withOutIds
      ? await productsWithOutReqIds(products, withOutIds)
      : products;

    const data = limit
      ? productsReqWithOutIds.filter((_, index) => index < limit)
      : productsReqWithOutIds;

    return data;
  } catch (error) {
    throw Error("Unexpected error Product");
  }
};

exports.getListByCollectionAndCategories = async function (
  collectionId,
  cateroriesIds,
  limit,
  withOutIds
) {
  try {
    const products = await Product.find({
      collectionId: collectionId,
      categoryId: { $in: cateroriesIds },
    });
    const productsReqWithOutIds = withOutIds
      ? productsWithOutReqIds(products, withOutIds)
      : products;

    const data = limit
      ? productsReqWithOutIds.filter((_, index) => index < limit)
      : productsReqWithOutIds;

    return data;
  } catch (error) {
    throw Error("Unexpected error Product");
  }
};

exports.getListByIds = async function (ids) {
  try {
    const data = await Product.find({ _id: ids });
    return data;
  } catch (error) {
    throw Error("Unexpected error Products");
  }
};

exports.getListByCollectionIdAndCategoryId = async function (
  collectionId,
  categoryId
) {
  try {
    const data = await Product.find({ collectionId, categoryId });
    return data;
  } catch (error) {
    throw Error("Unexpected error Product");
  }
};

exports.getListNewArrivals = async function () {
  try {
    const products = await Product.find();
    const filtered = products.filter((p) => (p.newArrivals ? p : false));
    const data = transformDataToIds(filtered);

    return data;
  } catch (error) {
    throw Error("Unexpected error Product");
  }
};

exports.getListPopularIds = async function (limit) {
  try {
    const products = await Product.find().sort({ rate: "desc" });
    const limitData = products.filter((_, index) => index < limit);
    const data = transformDataToIds(limitData);

    return data;
  } catch (error) {
    throw Error("Unexpected error Product");
  }
};

exports.getListNewArrivalsIds = async function (limit) {
  try {
    const products = await Product.find();
    const filterData = products.filter((p) => (p.newArrivals ? p : false));
    const limitData = filterData.filter((_, index) => index < limit);
    const data = transformDataToIds(limitData);

    return data;
  } catch (error) {
    throw Error("Unexpected error Product");
  }
};

exports.getListBySalesIds = async function (limit) {
  try {
    const products = await Product.find().sort({ numberOfSales: "desc" });
    const limitData = products.filter((_, index) => index < limit);
    const data = transformDataToIds(limitData);

    return data;
  } catch (error) {
    throw Error("Unexpected error Product");
  }
};

exports.getListOfOffersIds = async function (limit) {
  try {
    const products = await Product.find().sort({ newPrice: "desc" });
    const limitData = products.filter((_, index) => index < limit);
    const data = transformDataToIds(limitData);

    return data;
  } catch (error) {
    throw Error("Unexpected error Product");
  }
};

exports.getListCommingSoonIds = async function (limit) {
  try {
    const collectionId = "collection_4";
    const products = await Product.find({ collectionId });
    const limitData = products.filter((_, index) => index < limit);
    const data = transformDataToIds(limitData);

    return data;
  } catch (error) {
    throw Error("Unexpected error Product");
  }
};
