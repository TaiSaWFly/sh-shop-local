import React from "react";
import Select from "react-select";
import "./selectField.scss";

const SelectField = ({
  label,
  name,
  options,
  value,
  type,
  placeholder,
  onChange,
  error,
}) => {
  const handleChange = (value) => {
    onChange({ name: name, value });
  };

  const setSelectInvalidClass = () => {
    const defaultClass = "select_field";
    const invalidClass = "select_field__invalid";
    const setClass = error ? `${defaultClass} ${invalidClass}` : defaultClass;
    return setClass;
  };

  const setSelectClassPrefix = () => {
    switch (type) {
      case "form":
        return "select_form";
      case "filter":
        return "select_filter";

      default:
        break;
    }
  };

  return (
    <div className={setSelectInvalidClass()}>
      {label && <label>{label}</label>}

      <Select
        classNamePrefix={setSelectClassPrefix()}
        name={name}
        options={options}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        isClearable={true}
        maxMenuHeight={190}
      />

      {error && <span className="select_field__error">{error}</span>}
    </div>
  );
};
SelectField.defaultProps = {
  type: "form",
};

export default SelectField;
