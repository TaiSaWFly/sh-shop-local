const CategoryService = require("../services/category.service");

exports.getList = async function (req, res) {
  try {
    const data = await CategoryService.getList();
    res.status(200).json({
      status: 200,
      content: data,
      message: "Succesfully Caterogy Retrieved",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};

exports.getListByIds = async function (req, res) {
  try {
    const ids = req.body;

    const data = await CategoryService.getListByIds(ids);
    res.status(200).json({
      status: 200,
      content: data,
      message: "Succesfully Caterogy By Ids Retrieved",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};
