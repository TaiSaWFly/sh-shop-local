import React from "react";
import { useState } from "react";
import Button from "../../../../common/buttonComponent/button";
import CheckBoxField from "../../../../common/fieldCommonents/checkBoxField/checkBoxField";
import TextField from "../../../../common/fieldCommonents/textField/textField";
import style from "./courierTransportCompanyForm.module.scss";

const CourierTransportCompanyForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    house: "",
    flat: "",
    intercom: "",
    entrance: "",
    floor: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
    email: "",
    billing: "",
  });

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className={style.transport_company_form}>
      <form onSubmit={handleSubmit}>
        <div className={style.transport_company_form__two_field_collective}>
          <div className={style.transport_company_form__field}>
            <TextField
              label="first name"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
            />
          </div>

          <div className={style.transport_company_form__field}>
            <TextField
              label="last name"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.transport_company_form__field}>
          <TextField
            label="street"
            name="street"
            value={data.street}
            onChange={handleChange}
          />
        </div>

        <div className={style.transport_company_form__three_field_collective}>
          <div className={style.transport_company_form__field}>
            <TextField
              label="house"
              name="house"
              value={data.house}
              onChange={handleChange}
            />
          </div>

          <div className={style.transport_company_form__field}>
            <TextField
              label="flat"
              name="flat"
              value={data.flat}
              onChange={handleChange}
            />
          </div>

          <div className={style.transport_company_form__field}>
            <TextField
              label="floor"
              name="floor"
              value={data.floor}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.transport_company_form__two_field_collective}>
          <div className={style.transport_company_form__field}>
            <TextField
              label="entrance"
              name="entrance"
              value={data.entrance}
              onChange={handleChange}
            />
          </div>

          <div className={style.transport_company_form__field}>
            <TextField
              label="intercom"
              name="intercom"
              value={data.intercom}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.transport_company_form__two_field_collective}>
          <div className={style.transport_company_form__field}>
            <TextField
              label="city"
              name="city"
              value={data.city}
              onChange={handleChange}
            />
          </div>

          <div className={style.transport_company_form__field}>
            <TextField
              label="postal code"
              name="postalCode"
              value={data.postalCode}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.transport_company_form__two_field_collective}>
          <div className={style.transport_company_form__field}>
            <TextField
              label="phone number"
              name="phoneNumber"
              type="number"
              value={data.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className={style.transport_company_form__field}>
            <TextField
              label="e-mail"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.transport_company_form__field}>
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

export default CourierTransportCompanyForm;
