import React from "react";
import style from "./componentContainer.module.scss";

const ComponentContainer = ({ children, name }) => {
  return (
    <div className={style.container}>
      <div
        className={
          name === "footer"
            ? style.component_style_footer
            : name === "navBar"
            ? style.component_style_nav_bar
            : style.component_style
        }>
        {children}
      </div>
    </div>
  );
};

export default ComponentContainer;
