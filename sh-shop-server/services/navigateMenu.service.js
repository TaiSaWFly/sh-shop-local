const NavigateMenu = require("../models/NavigateMenu");

exports.getList = async function () {
  try {
    const data = await NavigateMenu.find().sort({ _id: "asc" });
    return data;
  } catch (error) {
    throw Error("Unexpected error NavigateMenu");
  }
};
