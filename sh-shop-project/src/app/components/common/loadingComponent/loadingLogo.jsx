import React from "react";
import style from "./loading.module.scss";

const LoadingLogo = () => {
  return (
    <div className={style.auth_layout__modal}>
      <div className={style.auth_layout__modal_wrapper}>
        <div className={style.auth_layout__logo}>
          <div to="/">sh</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingLogo;
