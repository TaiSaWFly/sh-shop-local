const OrderHistoryService = require("../services/orderHistory.service");

exports.getList = async function (req, res) {
  try {
    const data = await OrderHistoryService.getList();
    res.status(200).json({
      status: 200,
      content: data,
      message: "Succesfully OrderHistory Retrieved",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};

exports.getListById = async function (req, res) {
  try {
    const { userId } = req.params;

    const data = await OrderHistoryService.getListByUserId(userId);
    res.status(200).json({
      status: 200,
      content: data,
      message: "Succesfully OrderHistory Retrieved",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};

exports.create = async function (req, res) {
  try {
    await OrderHistoryService.create(req.body);

    res.status(201).json({
      status: 201,
      message: "Succesfully OrderHistory Created",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};
