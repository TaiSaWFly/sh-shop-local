const Review = require("../models/Review");

exports.getList = async function () {
  try {
    const data = await Review.find();
    return data;
  } catch (error) {
    throw Error("Unexpected error Review");
  }
};

exports.getListByProductId = async function (productId) {
  try {
    const data = await Review.find({ productId });
    return data;
  } catch (error) {
    throw Error("Unexpected error Review");
  }
};

exports.create = async function (reqData) {
  try {
    const data = await Review.create(reqData);
    return data;
  } catch (error) {
    throw Error("Unexpected error Review");
  }
};

exports.delete = async function (id) {
  try {
    await Review.findByIdAndDelete(id);
  } catch (error) {
    throw Error("Unexpected error Review");
  }
};
