import React from "react";
import style from "./basketQuantity.module.scss";
import { ReactComponent as Increment } from "../../../../../../node_modules/bootstrap-icons/icons/plus.svg";
import { ReactComponent as Decrement } from "../../../../../../node_modules/bootstrap-icons/icons/dash.svg";
import Button from "../../../common/buttonComponent/button";

const BasketQuantity = ({
  id,
  quantity,
  handleDecrementBasketElement,
  handleIncrementBasketElement,
}) => {
  return (
    <div className={style.basket_quantity}>
      <span>{quantity}</span>
      <div>
        <Button
          onAction={() => handleIncrementBasketElement(id)}
          className={"button_table"}>
          <Increment
            className={style.basket_quantity__action_icon}
            width="100%"
            height="100%"
          />
        </Button>
        <Button
          onAction={() => handleDecrementBasketElement(id)}
          className={"button_table"}>
          <Decrement
            className={style.basket_quantity__action_icon}
            width="100%"
            height="100%"
          />
        </Button>
      </div>
    </div>
  );
};

export default BasketQuantity;
