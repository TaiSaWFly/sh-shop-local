import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "../../../common/fieldCommonents/textField/textField";
import style from "./editProfileForm.module.scss";
import Button from "../../../common/buttonComponent/button";
import BackButton from "../../../common/buttonComponent/backButton";
import Loading from "../../../common/loadingComponent/loading";
import { updateUser } from "../../../../store/slices/user";
import { getCountryForSelect } from "../../../../store/slices/country";
import SelectField from "../../../common/fieldCommonents/selectField/selectField";
import { editUserSchema } from "../../../../utils/yupSchema";

const EditProfileForm = ({ user }) => {
  const dispatch = useDispatch();
  const redirect = "/account";

  const countriesOptions = useSelector(getCountryForSelect());
  const userCountry = countriesOptions.find((c) => c.value === user.country);

  const [data, setData] = useState({
    userName: user.userName,
    email: user.email,
    country: userCountry,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const validate = () => {
    editUserSchema
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
      ...data,
      country: data.country.value,
    };

    dispatch(updateUser({ payload: resData, redirect }));
  };

  return (
    <div className={style.edit_profile_form__wrapper}>
      <div className={style.edit_profile_form}>
        <BackButton
          className={style.edit_profile__back_button}
          urlBack={redirect}>
          go back
        </BackButton>

        <div className={style.profile_form__title}>Edit Profile</div>
        {user ? (
          <>
            <form onSubmit={handleSubmit}>
              <div className={style.edit_form__field}>
                <TextField
                  name="userName"
                  label="Your Name"
                  value={data.userName}
                  onChange={handleChange}
                  error={errors.userName}
                />
              </div>

              <div className={style.edit_form__field}>
                <TextField
                  name="email"
                  label="e-mail"
                  value={data.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>

              <div className={style.edit_form__field}>
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

              <div className={style.edit_form__action}>
                <Button isDisabled={!isValid}>submit</Button>
              </div>
            </form>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default EditProfileForm;
