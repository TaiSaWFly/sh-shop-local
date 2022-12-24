import React, { useState, useEffect } from "react";
import style from "./dropdownList.module.scss";
import { Link } from "react-router-dom";
import Loading from "../../../../common/loadingComponent/loading";
import { useSelector } from "react-redux";
import {
  getCategoryByIds,
  getCategoryLoadingStatus,
} from "../../../../../store/slices/category";

const DropdownList = ({
  submenus,
  dropdown,
  collectionPath: path,
  collectionName: name,
}) => {
  const [submenusItems, setSubmenusItems] = useState();
  const categorySelectorData = useSelector(getCategoryByIds(submenus));
  const isLoadingCategory = useSelector(getCategoryLoadingStatus());

  useEffect(() => {
    setSubmenusItems(categorySelectorData);
    // eslint-disable-next-line
  }, [submenus]);

  return (
    <div
      className={
        dropdown ? style.dropdown_list__show : style.dropdown_list__hide
      }>
      <div className={style.dropdown_list__title}>{name}</div>
      <ul className={style.dropdown_list__item}>
        {!isLoadingCategory && submenusItems ? (
          submenusItems.map((s) => (
            <li key={s._id} className={style.dropdown_list__wrapper}>
              <Link
                key={s._id}
                className={style.dropdown_list__link}
                to={{
                  pathname: `/collection/${path + "/" + s.path}/products`,
                }}>
                {s.name}
              </Link>
            </li>
          ))
        ) : (
          <Loading />
        )}
      </ul>
    </div>
  );
};

export default DropdownList;
