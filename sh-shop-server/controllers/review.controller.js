const ReviewService = require("../services/review.service");
const { validationResult } = require("express-validator");

exports.getList = async function (req, res) {
  try {
    const data = await ReviewService.getList();
    res.status(200).json({
      status: 200,
      content: data,
      message: "Succesfully Review Retrieved",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};

exports.getListByProductId = async function (req, res) {
  try {
    const { productId } = req.params;
    const data = await ReviewService.getListByProductId(productId);

    res.status(200).json({
      status: 200,
      content: data,
      message: "Succesfully Review Retrieved",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};

exports.create = async function (req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(406).json({
        error: {
          message: "NOT ACCEPTABLE",
          code: 406,
          errors: errors.array(),
        },
      });
    }

    const data = await ReviewService.create(req.body);

    res.status(201).json({
      status: 201,
      content: data,
      message: "Succesfully Review Created",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};

exports.delete = async function (req, res) {
  try {
    const { id } = req.params;
    await ReviewService.delete(id);

    res.status(201).json({
      status: 200,
      message: "Succesfully Review Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};
