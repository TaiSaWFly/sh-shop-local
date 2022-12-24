import React from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import LoginPage from "../../page/authPages/loginPage/loginPage";
import SignupPage from "../../page/authPages/signupPage/signupPage";
import style from "./authLayout.module.scss";

const AuthLayout = () => {
  return (
    <div className={style.auth_layout__modal}>
      <div className={style.auth_layout__modal_wrapper}>
        <div className={style.auth_layout__logo}>
          <Link to="/">sh</Link>
        </div>

        <Switch>
          <Route path="/auth/signin" component={LoginPage} />
          <Route path="/auth/signup" component={SignupPage} />
          <Redirect to="/auth/signin" from="*" />
        </Switch>
      </div>
    </div>
  );
};

export default AuthLayout;
