import React, { useState } from "react";
import Button from "../../../common/buttonComponent/button";
import CheckBoxField from "../../../common/fieldCommonents/checkBoxField/checkBoxField";
import TextField from "../../../common/fieldCommonents/textField/textField";
import { nanoid } from "nanoid";
import _ from "lodash";
import style from "./addNewAddressForm.module.scss";

const AddNewAddressForm = ({ addAddress }) => {
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
    billing: false,
  });

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: nanoid(),
      ...data,
    };

    const deleteBilling = _.omit(newData, ["billing"]);
    const createNewAddress = { ...deleteBilling };

    addAddress(createNewAddress, data.billing);
  };

  return (
    <div className={style.add_address_form}>
      <div className={style.add_address_form__title}>add new address</div>
      <form onSubmit={handleSubmit}>
        <div className={style.add_address_form__two_field_collective}>
          <div className={style.add_address_form__field}>
            <TextField
              label="first name"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
            />
          </div>

          <div className={style.add_address_form__field}>
            <TextField
              label="last name"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.add_address_form__field}>
          <TextField
            label="street"
            name="street"
            value={data.street}
            onChange={handleChange}
          />
        </div>

        <div className={style.add_address_form__three_field_collective}>
          <div className={style.add_address_form__field}>
            <TextField
              label="house"
              name="house"
              value={data.house}
              onChange={handleChange}
            />
          </div>

          <div className={style.add_address_form__field}>
            <TextField
              label="flat"
              name="flat"
              value={data.flat}
              onChange={handleChange}
            />
          </div>

          <div className={style.add_address_form__field}>
            <TextField
              label="floor"
              name="floor"
              value={data.floor}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.add_address_form__two_field_collective}>
          <div className={style.add_address_form__field}>
            <TextField
              label="entrance"
              name="entrance"
              value={data.entrance}
              onChange={handleChange}
            />
          </div>

          <div className={style.add_address_form__field}>
            <TextField
              label="intercom"
              name="intercom"
              value={data.intercom}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.add_address_form__two_field_collective}>
          <div className={style.add_address_form__field}>
            <TextField
              label="city"
              name="city"
              value={data.city}
              onChange={handleChange}
            />
          </div>

          <div className={style.add_address_form__field}>
            <TextField
              label="postal code"
              name="postalCode"
              value={data.postalCode}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.add_address_form__field}>
          <CheckBoxField
            name="billing"
            value={data.billing}
            onChange={handleChange}>
            Use this address for Billing
          </CheckBoxField>
        </div>

        <Button>add address</Button>
      </form>
    </div>
  );
};

export default AddNewAddressForm;
