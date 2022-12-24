const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const { generateUserAvatar } = require("../utils/helpers/generateUserAvatar");

const TokenService = require("../services/token.service");
const UserService = require("../services/user.service");

function isTokenInvalid(data, dbToken) {
  return !data || !dbToken || data._id !== dbToken?.user?.toString();
}

exports.signup = async function (req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: {
          message: "INVALID_DATA",
          code: 400,
          errors: errors.array(),
        },
      });
    }
    const { email, password } = req.body;

    const existingUser = await UserService.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        error: {
          message: "EMAIL_EXISTS",
          code: 400,
        },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await UserService.create({
      ...generateUserAvatar(),
      ...req.body,
      password: hashedPassword,
    });

    const tokens = TokenService.generate({ _id: newUser._id });

    await TokenService.save(newUser._id, tokens.refreshToken);

    res.status(201).send({ ...tokens, userId: newUser._id });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};

exports.signinWithPassword = async function (req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: {
          message: "INVALID_DATA",
          code: 400,
        },
      });
    }

    const { email, password } = req.body;

    const existingUser = await UserService.findOne({ email });

    if (!existingUser) {
      return res.status(400).send({
        error: {
          message: "EMAIL_NOT_FOUND",
          code: 400,
        },
      });
    }

    const isPasswordEqual = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordEqual) {
      return res.status(400).json({
        error: {
          message: "INVALID_PASSWORD",
          code: 400,
        },
      });
    }

    const tokens = TokenService.generate({ _id: existingUser._id });
    await TokenService.save(existingUser._id, tokens.refreshToken);

    res.status(200).send({ ...tokens, userId: existingUser._id });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};

exports.token = async function (req, res) {
  try {
    const { refreshToken } = req.body;
    const data = TokenService.validateRefresh(refreshToken);
    const dbToken = await TokenService.findToken(refreshToken);

    if (isTokenInvalid(data, dbToken)) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const tokens = await TokenService.generate({ id: data._id });
    await TokenService.save(data._id, tokens.refreshToken);

    res.status(200).send({ ...tokens, userId: data._id });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred on the server. Try again later...",
    });
  }
};
