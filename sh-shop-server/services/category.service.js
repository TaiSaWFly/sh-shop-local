const Category = require("../models/Category");

exports.getList = async function () {
  try {
    const data = await Category.find();
    return data;
  } catch (error) {
    throw Error("Unexpected error Category");
  }
};

exports.getListByIds = async function (ids) {
  try {
    const data = await Category.find({ _id: { $in: ids } });
    return data;
  } catch (error) {
    throw Error("Unexpected error Category");
  }
};

exports.getCategoryByPath = async function (path) {
  try {
    const data = await Category.findOne({ path });
    return data;
  } catch (error) {
    throw Error("Unexpected error Category");
  }
};
