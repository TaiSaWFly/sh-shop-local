import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import style from "./loginPage.module.scss";
import TitleComponent from "../../../common/titleComponent/titleComponent";
import TextField from "../../../common/fieldCommonents/textField/textField";
import Button from "../../../common/buttonComponent/button";
import { loginSchema } from "../../../../utils/yupSchema";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAuthError,
  getAuthErrors,
  logIn,
} from "../../../../store/slices/user";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authErrors = useSelector(getAuthErrors());

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(clearAuthError());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const validate = () => {
    loginSchema
      .validate(data)
      .then(() => setErrors({}))
      .catch((error) => setErrors({ [error.path]: error.message }));
    return Object.keys(errors).length === 0;
  };

  const handleChange = (target) => {
    setData((prevStare) => ({
      ...prevStare,
      [target.name]: target.value,
    }));
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    const redirect = history.location.state
      ? history.location.state.from.pathname
      : "/";

    dispatch(logIn({ payload: data, redirect }));
  };

  return (
    <div className={style.login_page}>
      <TitleComponent title={"sign in"} />

      {authErrors && (
        <div className={style.login_page__error}>{authErrors}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={style.login_form__field}>
          <TextField
            name="email"
            label="e-mail"
            value={data.email}
            onChange={handleChange}
            error={errors.email}
          />
        </div>

        <div className={style.login_form__field}>
          <TextField
            name="password"
            label="password"
            type="password"
            value={data.password}
            onChange={handleChange}
            error={errors.password}
          />
        </div>

        <div className={style.login_form__action}>
          <Button isDisabled={!isValid}>log in</Button>
          <div>
            <Link to="/auth/signup">i don't have an account</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
