import React from "react";

const Button = ({ className, children, onAction, isDisabled, type }) => {
  return (
    <button
      onClick={onAction}
      disabled={isDisabled}
      type={type}
      className={className}>
      {children}
    </button>
  );
};

export default Button;
