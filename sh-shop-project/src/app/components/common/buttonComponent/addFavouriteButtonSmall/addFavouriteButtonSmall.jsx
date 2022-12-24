import React from "react";
import { ReactComponent as Favourite } from "../../../../../../node_modules/bootstrap-icons/icons/heart-fill.svg";
import style from "./addFavouriteButtonSmall.module.scss";

const AddFavouriteButtonSmall = ({ isFavourite, handleToggleFavourite }) => {
  return (
    <div
      onClick={handleToggleFavourite}
      className={
        isFavourite
          ? style.add_favourite_button__active
          : style.add_favourite_button
      }>
      <Favourite
        className={style.add_favourite_button__icon}
        width="17px"
        height="17px"
      />
    </div>
  );
};

export default AddFavouriteButtonSmall;
