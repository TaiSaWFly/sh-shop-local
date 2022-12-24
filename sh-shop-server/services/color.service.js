const Color = require("../models/Color");

exports.getList = async function () {
  try {
    const data = await Color.find().sort({ _id: "asc" });
    return data;
  } catch (error) {
    throw Error("Unexpected error Color");
  }
};

exports.getListByIds = async function (ids) {
  try {
    const data = await Color.find({ _id: { $in: ids } });
    return data;
  } catch (error) {
    throw Error("Unexpected error Color");
  }
};
