import React from "react";
import { useSelector } from "react-redux";
import { getCountryById } from "../../../../store/slices/country";
import style from "./accountUser.module.scss";

const AccountUser = ({ user }) => {
  const userCountry = useSelector(getCountryById(user.country));

  return (
    <div className={style.account_user}>
      <div className={style.user_avatar}>
        <img alt="pic" src={user.avatar} />
      </div>
      <div className={style.user_info}>
        <div>
          <span>name</span>
          <p>{user.userName}</p>
        </div>
        <div>
          <span>e-mail</span>
          <p>{user.email}</p>
        </div>

        <div>
          <span>country</span>
          <p>{userCountry.name}</p>
        </div>
        <div>
          <span>qty comments</span>
          <p>in development</p>
        </div>
        <div>
          <span>favourite</span>
          <p>in development</p>
        </div>
      </div>
    </div>
  );
};

export default AccountUser;
