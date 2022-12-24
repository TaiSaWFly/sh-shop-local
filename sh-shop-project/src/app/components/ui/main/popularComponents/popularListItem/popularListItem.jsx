import React, { useEffect, useState } from "react";
import style from "./popularListItem.module.scss";

const PopularListItem = ({ listId, currentListId, name, handleFilter }) => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setActive(currentListId === listId ? true : false);
  }, [currentListId, listId]);

  const handleActiveList = () => {
    handleFilter(listId);
  };
  return (
    <li
      className={
        !isActive
          ? style.popular_products__list_item
          : style.popular_products__list_item__active
      }
      onClick={handleActiveList}>
      {name}
    </li>
  );
};

export default PopularListItem;
