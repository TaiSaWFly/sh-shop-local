const UserService = require("../services/user.service");

exports.getUser = async function (req, res) {
  try {
    const { id } = req.params;

    const data = await UserService.findOne({ _id: id });
    const resData = {
      _id: data._id,
      userName: data.userName,
      email: data.email,
      country: data.country,
      avatar: data.avatar,
    };

    res.status(200).json({
      status: 200,
      content: resData,
      message: "Succesfully User Retrieved",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};

exports.userUpdate = async function (req, res) {
  try {
    const { id } = req.params;

    const data = await UserService.update(id, req.body);

    const resData = {
      _id: data._id,
      userName: data.userName,
      email: data.email,
      country: data.country,
      avatar: data.avatar,
    };

    res.status(200).json({
      status: 200,
      content: resData,
      message: "Succesfully User Updated",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};
