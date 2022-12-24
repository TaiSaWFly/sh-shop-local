const ColorService = require("../services/color.service");

exports.getList = async function (req, res) {
  try {
    const data = await ColorService.getList();
    res.status(200).json({
      status: 200,
      content: data,
      message: "Succesfully Color Retrieved",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};

exports.getListByIds = async function (req, res) {
  try {
    const { id } = req.params;

    const data = await ColorService.getListByIds(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};
