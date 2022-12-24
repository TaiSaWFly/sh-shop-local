const OrderHistory = require("../models/OrderHistory");

exports.getList = async function () {
  try {
    const data = await OrderHistory.find();
    return data;
  } catch (error) {
    throw Error("Unexpected error HistoryPurchase");
  }
};

exports.getListByUserId = async function (userId) {
  try {
    const data = await OrderHistory.find({ userId });
    return data;
  } catch (error) {
    throw Error("Unexpected error HistoryPurchase");
  }
};

exports.create = async function (data) {
  try {
    const newData = await OrderHistory.create(data);
    return newData;
  } catch (error) {
    throw Error("Unexpected error HistoryPurchase");
  }
};
