import React from "react";
import style from "./textAreaField.module.scss";

const TextAreaField = ({ name, label, value, onChange }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className={style.form__field}>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} name={name} value={value} onChange={handleChange} />
    </div>
  );
};

export default TextAreaField;
