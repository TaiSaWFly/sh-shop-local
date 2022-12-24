import React from "react";
import { useSelector } from "react-redux";
import { getFavouriteQuantity } from "../../../../store/slices/favourite";
import style from "./favouriteChevronQuantity.module.scss";

const FavouriteChevronQuantity = () => {
  const qtyFavourite = useSelector(getFavouriteQuantity());

  return (
    <>
      {qtyFavourite !== 0 && (
        <div className={style.chevron_quantity__wrapper}>
          <span className={style.chevron_quantity__info}>{qtyFavourite}</span>
        </div>
      )}
    </>
  );
};

export default FavouriteChevronQuantity;
