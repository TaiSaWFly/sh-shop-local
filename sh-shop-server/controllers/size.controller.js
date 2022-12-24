const SizeService = require("../services/size.service");

exports.getList = async function (req, res) {
  try {
    const data = await SizeService.getList();
    res.status(200).json({
      status: 200,
      content: data,
      message: "Succesfully Size Retrieved",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};
