import React from "react";
import style from "./userReviewer.module.scss";

const UserReviewer = ({ user }) => {
  return (
    <div className={style.display_user}>
      <div className={style.display_user__avatar}>
        <img alt="pic" src={user.avatar} />
      </div>
      <div className={style.display_user__name}>{user.userName}</div>
    </div>
  );
};

export default UserReviewer;
