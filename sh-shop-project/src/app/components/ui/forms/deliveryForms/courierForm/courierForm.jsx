import React, { useEffect, useState } from "react";
import { courierFormSchema } from "../../../../../utils/yupSchema";
import Button from "../../../../common/buttonComponent/button";
import CheckBoxField from "../../../../common/fieldCommonents/checkBoxField/checkBoxField";
import TextField from "../../../../common/fieldCommonents/textField/textField";
import style from "./courierForm.module.scss";

const CourierForm = () => {
  const [data, setData] = useState({
    firstName: "",
    phoneNumber: "",
    street: "",
    city: "",
    house: "",
    flat: "",
    floor: "",
    entrance: "",
    intercom: "",
    billing: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const validate = () => {
    courierFormSchema
      .validate(data)
      .then(() => setErrors({}))
      .catch((error) => setErrors({ [error.path]: error.message }));
    return Object.keys(errors).length === 0;
  };

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };

  return (
    <div className={style.courier_form}>
      <form onSubmit={handleSubmit}>
        <div className={style.courier_form__two_field_collective}>
          <div className={style.courier_form__field}>
            <TextField
              label="first name"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
          </div>

          <div className={style.courier_form__field}>
            <TextField
              label="phone number"
              name="phoneNumber"
              type="number"
              value={data.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.courier_form__two_field_collective}>
          <div className={style.courier_form__field}>
            <TextField
              label="street"
              name="street"
              value={data.street}
              onChange={handleChange}
            />
          </div>

          <div className={style.courier_form__field}>
            <TextField
              label="city"
              name="city"
              value={data.city}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.courier_form__three_field_collective}>
          <div className={style.courier_form__field}>
            <TextField
              label="house"
              name="house"
              value={data.house}
              onChange={handleChange}
            />
          </div>

          <div className={style.courier_form__field}>
            <TextField
              label="flat"
              name="flat"
              value={data.flat}
              onChange={handleChange}
            />
          </div>

          <div className={style.courier_form__field}>
            <TextField
              label="floor"
              name="floor"
              value={data.floor}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.courier_form__two_field_collective}>
          <div className={style.courier_form__field}>
            <TextField
              label="entrance"
              name="entrance"
              value={data.entrance}
              onChange={handleChange}
            />
          </div>

          <div className={style.courier_form__field}>
            <TextField
              label="intercom"
              name="intercom"
              value={data.intercom}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={style.courier_form__field}>
          <CheckBoxField
            name="billing"
            value={data.billing}
            onChange={handleChange}>
            Use this address for Billing
          </CheckBoxField>
        </div>

        <Button>submit</Button>
      </form>
    </div>
  );
};

export default CourierForm;
