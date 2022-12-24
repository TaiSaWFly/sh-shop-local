import React from "react";
import style from "./addBasketButtonSmall.module.scss";
import { ReactComponent as Basket } from "../../../../../../node_modules/bootstrap-icons/icons/handbag-fill.svg";

const AddBasketButtonSmall = ({ inBasket, handleAddProduct }) => {
  return (
    <div
      onClick={handleAddProduct}
      className={
        inBasket ? style.add_basket_button__active : style.add_basket_button
      }>
      <Basket
        className={style.add_basket_button__icon}
        width="17px"
        height="17px"
      />
    </div>
  );
};

export default AddBasketButtonSmall;
