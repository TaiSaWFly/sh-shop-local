import React from "react";
import { Link } from "react-router-dom";
import style from "./navBar.module.scss";
import NavList from "../navList/navList";

const NavBar = () => {
  return (
    <nav className={style.nav_bar}>
      <div className={style.nav_bar__wrap}>
        <Link className={style.nav_logo} to="/">
          SH
        </Link>
        <NavList />
      </div>
    </nav>
  );
};

export default NavBar;
