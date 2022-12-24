import React from "react";
import style from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={style.loading}>
      <div className={style.loading_wrapper}>
        <svg className={style.spinner} viewBox="0 0 50 50">
          <circle
            className={style.path}
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
