import React from "react";
import style from "./checkBoxField.module.scss";

const CheckBoxField = ({ name, value, children, onChange, error }) => {
  const handleChange = () => {
    onChange({ name: name, value: !value });
  };

  return (
    <div>
      <div className={style.checkbox_field}>
        <input
          className={style.checkbox}
          type="checkbox"
          value=""
          id={name}
          onChange={handleChange}
          checked={value}
        />
        <label htmlFor={name}>{children}</label>
      </div>
      {error && <span className={style.checkbox_field__error}>{error}</span>}
    </div>
  );
};

export default CheckBoxField;
