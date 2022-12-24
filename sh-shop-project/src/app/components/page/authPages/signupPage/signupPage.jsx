import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupSchema } from "../../../../utils/yupSchema";
import Button from "../../../common/buttonComponent/button";
import CheckBoxField from "../../../common/fieldCommonents/checkBoxField/checkBoxField";
import SelectField from "../../../common/fieldCommonents/selectField/selectField";
import TextField from "../../../common/fieldCommonents/textField/textField";
import TitleComponent from "../../../common/titleComponent/titleComponent";
import style from "./signupPage.module.scss";
import {
  clearAuthError,
  getAuthErrors,
  signUp,
} from "../../../../store/slices/user";
import { getCountryForSelect } from "../../../../store/slices/country";

const SignupPage = () => {
  const dispatch = useDispatch();
  const authErrors = useSelector(getAuthErrors());

  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    licence: false,
  });
  const [errors, setErrors] = useState({});
  const countriesOptions = useSelector(getCountryForSelect());

  useEffect(() => {
    dispatch(clearAuthError());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const validate = () => {
    signupSchema
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

    const resData = {
      userName: data.userName,
      password: data.password,
      email: data.email,
      country: data.country.value,
    };

    dispatch(signUp(resData));
  };

  return (
    <div className={style.signup_page}>
      <TitleComponent title={"sign up"} />
      {authErrors && (
        <div className={style.signup_page__error}>{authErrors}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <div className={style.signup_form__field}>
            <TextField
              name="userName"
              label="Account Name"
              value={data.userName}
              onChange={handleChange}
              error={errors.userName}
            />
          </div>

          <div className={style.signup_form__field}>
            <TextField
              name="email"
              label="e-mail"
              value={data.email}
              onChange={handleChange}
              error={errors.email}
            />
          </div>

          <div className={style.signup_form__field}>
            <TextField
              name="password"
              label="password"
              type="password"
              value={data.password}
              onChange={handleChange}
              error={errors.password}
            />
          </div>

          <div className={style.signup_form__field}>
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={data.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
          </div>
          <div className={style.signup_form__field}>
            <SelectField
              label="country"
              name="country"
              options={countriesOptions}
              value={data.country}
              type="form"
              placeholder="choose your country"
              onChange={handleChange}
              error={errors.country}
            />
          </div>
        </div>

        <div className={style.signup_form__field}>
          <CheckBoxField
            name="licence"
            value={data.licence}
            onChange={handleChange}
            error={errors.licence}>
            <span className={style.signup_form__licence}>
              You agree to our <Link to="/">Privacy Policy</Link>
            </span>
          </CheckBoxField>
        </div>

        <div className={style.signup_form__action}>
          <Button isDisabled={!isValid}>sign up</Button>

          <div>
            <Link to="/auth/signin">i have an account</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
