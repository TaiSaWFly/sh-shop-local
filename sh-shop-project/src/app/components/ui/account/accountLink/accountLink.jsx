import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./accountLink.module.scss";
import { ReactComponent as Person } from "../../../../../../node_modules/bootstrap-icons/icons/person-circle.svg";
import Loading from "../../../common/loadingComponent/loading";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuthUserId,
  getIsLoadingStatusUser,
  getIsLoggedInStatus,
  getUser,
  getUserById,
  logOut,
} from "../../../../store/slices/user";

const AccountLink = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedInStatus());
  const authUserId = useSelector(getAuthUserId());
  const user = useSelector(getUser());
  const isLoadingStatusUser = useSelector(getIsLoadingStatusUser());

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserById(authUserId));
    }

    // eslint-disable-next-line
  }, [isLoggedIn]);

  const handlelogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={style.account_link__wrapper}>
      {isLoggedIn ? (
        <>
          {!isLoadingStatusUser ? (
            <div className={style.account_link}>
              <Link to="/account" className={style.account_link__action}>
                <div className={style.account_link__wrapper_icon}>
                  <Person className={style.account_link__icon} />
                </div>
                <div>
                  <span>Hi, </span>
                  <span>{user.userName} </span>
                </div>
              </Link>
              <div
                onClick={handlelogOut}
                className={style.account_link__logout}>
                (<span>logout</span>)
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </>
      ) : (
        <>
          <Link to="/auth/login" className={style.account_link__actions}>
            Sign In
          </Link>
          <Link to="/auth/signup" className={style.account_link__actions}>
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
};

export default AccountLink;
