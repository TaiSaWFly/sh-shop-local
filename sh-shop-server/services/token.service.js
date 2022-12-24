const jwt = require("jsonwebtoken");
const config = require("config");
const Token = require("../models/Token");

exports.generate = function (payload) {
  const accessToken = jwt.sign(payload, config.get("accessSecret"), {
    expiresIn: "1h",
  });

  const refreshToken = jwt.sign(payload, config.get("refreshSecret"));

  return {
    accessToken,
    refreshToken,
    expiresIn: 3600,
  };
};

exports.save = async function (user, refreshToken) {
  const data = await Token.findOne({ user });
  if (data) {
    data.refreshToken = refreshToken;
    return data.save();
  }

  const token = await Token.create({ user, refreshToken });
  return token;
};

exports.validateRefresh = function (refreshToken) {
  try {
    return jwt.verify(refreshToken, config.get("refreshSecret"));
  } catch (error) {
    return null;
  }
};

exports.validateAccess = function (accessToken) {
  try {
    return jwt.verify(accessToken, config.get("accessSecret"));
  } catch (error) {
    return null;
  }
};

exports.findToken = async function (refreshToken) {
  try {
    return await Token.findOne({ refreshToken });
  } catch (error) {
    return null;
  }
};
