const Size = require("../models/Size");

exports.getList = async function () {
  try {
    const data = await Size.find().sort({ _id: "asc" });
    return data;
  } catch (error) {
    throw Error("Unexpected error Size");
  }
};
