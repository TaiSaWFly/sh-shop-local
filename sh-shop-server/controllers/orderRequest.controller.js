const OrderRequestService = require("../services/orderRequest.service");

exports.getList = async function (req, res) {
  try {
    const data = await OrderRequestService.getList();
    res.status(200).json({
      status: 200,
      content: data,
      message: "Succesfully OrderRequest Retrieved",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};

exports.create = async function (req, res) {
  try {
    await OrderRequestService.create(req.body);

    res.status(201).json({
      status: 201,
      message: "Succesfully OrderRequest Created",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};
