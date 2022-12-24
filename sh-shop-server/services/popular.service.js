const Popular = require("../models/Popular");

exports.getList = async function () {
  try {
    const data = await Popular.find().sort({ _id: "asc" });
    return data;
  } catch (error) {
    throw Error("Unexpected error Popular");
  }
};
