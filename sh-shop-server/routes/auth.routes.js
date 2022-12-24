const express = require("express");
const { check } = require("express-validator");
const router = express.Router({ mergeParams: true });

const Controller = require("../controllers/auth.controller");

router.post("/signup", [
  check("email", "Некорректрый email").isEmail(),
  check("password", "Минимальная длинна пароля 8").isLength({ min: 8 }),
  check(
    "userName",
    "Имя пользователя должно состоять хотя бы из 3 символов"
  ).isLength({ min: 3 }),
  Controller.signup,
]);

router.post("/signinWithPassword", [
  check("email", "Email некорректный").normalizeEmail().isEmail(),
  check("password", "Пароль не может быть пустым").exists(),
  Controller.signinWithPassword,
]);

router.post("/token", Controller.token);

module.exports = router;
