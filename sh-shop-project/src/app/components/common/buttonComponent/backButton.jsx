import React from "react";
import { useHistory } from "react-router-dom";

const BackButton = ({ className, children, urlBack }) => {
  const history = useHistory();

  const handleRedirect = () => {
    history.push(urlBack);
  };

  return (
    <button className={className} onClick={handleRedirect}>
      {children}
    </button>
  );
};

export default BackButton;
