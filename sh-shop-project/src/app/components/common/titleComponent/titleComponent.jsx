import React from "react";
import style from "./titleComponent.module.scss";

const TitleComponent = ({ title, subtitle }) => {
  return (
    <div className={style.title_component}>
      <div className={style.title}>{title}</div>
      {subtitle ? <div className={style.subtitle}>{subtitle}</div> : null}
    </div>
  );
};

export default TitleComponent;
