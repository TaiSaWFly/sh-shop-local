import React from "react";
import Button from "../button";
import style from "./addBasketButton.module.scss";

const AddBasketButton = ({ inBasket, qty, handleAddProduct }) => {
  return (
    <Button
      className={inBasket ? style.basket_button__active : style.basket_button}
      onAction={handleAddProduct}>
      {inBasket ? (
        <span className={style.basket_button__info}>
          add more
          {qty > 1 && (
            <div className={style.basket_button__qty}>
              <span>{qty}</span>
            </div>
          )}
        </span>
      ) : (
        "add to basket"
      )}
    </Button>
  );
};

export default AddBasketButton;
