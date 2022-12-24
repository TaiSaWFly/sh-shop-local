const OrderRequest = require("../models/OrderRequest");

exports.getList = async function () {
  try {
    const data = await OrderRequest.find();
    return data;
  } catch (error) {
    throw Error("Unexpected error OrderRequest");
  }
};

exports.create = async function (data) {
  try {
    const newData = await OrderRequest.create(data);
    return newData;
  } catch (error) {
    throw Error("Unexpected error OrderRequest");
  }
};
