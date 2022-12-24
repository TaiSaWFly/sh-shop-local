import React from "react";
import style from "./mainTitle.module.scss";
import Button from "../../../common/buttonComponent/button";
import { useHistory } from "react-router-dom";

const MainTitle = () => {
  const history = useHistory();
  const handleRedirectLink = () => {
    history.push("/newarrivals");
  };

  return (
    <div className={style.main_title__content}>
      <h1>Hazy Shade</h1>
      <div className={style.main_subtitle}>
        Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo.
      </div>

      <div className={style.main_title__button}>
        <Button onAction={handleRedirectLink} className="button">
          check new arrivals
        </Button>
      </div>
    </div>
  );
};

export default MainTitle;
