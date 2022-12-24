import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { requestOrder } from "../../../../../store/slices/basket";
import { requestForReceivedOrderFormSchema } from "../../../../../utils/yupSchema";
import Button from "../../../../common/buttonComponent/button";
import TextField from "../../../../common/fieldCommonents/textField/textField";
import style from "./requestForReceivedOrder.module.scss";

const initialState = {
  userName: "",
  email: "",
  phone: "",
};

const RequestForReceivedOrder = ({ user }) => {
  const dispatch = useDispatch();
  const initData = user
    ? { userName: user.userName, email: user.email, phone: "" }
    : initialState;

  const [data, setData] = useState(initData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const validate = () => {
    requestForReceivedOrderFormSchema
      .validate(data)
      .then(() => setErrors({}))
      .catch((error) => setErrors({ [error.path]: error.message }));
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

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
    const resData = user
      ? { ...data, userId: user._id }
      : { ...data, userId: nanoid() };

    dispatch(requestOrder(resData));
  };

  return (
    <div className={style.request_form}>
      <form onSubmit={handleSubmit}>
        <div className={style.request_form__two_field_collective}>
          <div className={style.request_form__field}>
            <TextField
              label="Name"
              name="userName"
              value={data.userName}
              onChange={handleChange}
              error={errors.userName}
            />
          </div>

          <div className={style.request_form__field}>
            <TextField
              label="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              error={errors.email}
            />
          </div>
        </div>

        <div className={style.request_form__field}>
          <TextField
            label="phone number"
            name="phone"
            type="number"
            value={data.phone}
            onChange={handleChange}
            error={errors.phone}
          />
        </div>

        <Button isDisabled={!isValid}>submit</Button>
      </form>
    </div>
  );
};

export default RequestForReceivedOrder;
