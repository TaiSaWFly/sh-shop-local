const Collection = require("../models/Collection");

exports.getList = async function () {
  try {
    const data = await Collection.find();
    return data;
  } catch (error) {
    throw Error("Unexpected error Collection");
  }
};

exports.getListByIds = async function (ids) {
  try {
    const data = await Collection.find({ _id: { $in: ids } });
    return data;
  } catch (error) {
    throw Error("Unexpected error Collection");
  }
};

exports.getCollectionByPath = async function (path) {
  try {
    const data = await Collection.findOne({ path });
    return data;
  } catch (error) {
    throw Error("Unexpected error Collection");
  }
};
