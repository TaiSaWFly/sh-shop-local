import React, { useState } from "react";
import style from "./navListMenuItems.module.scss";
import DropdownList from "../../dropdown/dropdownList/dropdownList";
import { Link } from "react-router-dom";

const NavListMenuItems = ({ menu }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    menu && (
      <li
        className={style.menu_items}
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}>
        {menu.categories && menu.categories.length !== 0 ? (
          <>
            <div
              className={
                !dropdown
                  ? style.menu_items__title_arrow
                  : style.menu_items__title_arrow_active
              }>
              <Link
                className={style.menu_items__title}
                to={{
                  pathname: `/collection/${menu.path}`,
                }}>
                {menu.name}
              </Link>
            </div>

            <DropdownList
              submenus={menu.categories}
              dropdown={dropdown}
              collectionPath={menu.path}
              collectionName={menu.name}
            />
          </>
        ) : menu.categories && menu.categories.length === 0 ? (
          <Link
            className={style.menu_items__title}
            to={{
              pathname: `/collection/${menu.path}/products`,
            }}>
            {menu.name}
          </Link>
        ) : (
          <Link className={style.menu_items__title} to={menu.path}>
            {menu.name}
          </Link>
        )}
      </li>
    )
  );
};

export default NavListMenuItems;
