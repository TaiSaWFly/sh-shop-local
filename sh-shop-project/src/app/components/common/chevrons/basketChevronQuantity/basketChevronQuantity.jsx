import React from "react";
import style from "./basketChevronQuantity.module.scss";
import { useSelector } from "react-redux";
import { getQtyProductsBasket } from "../../../../store/slices/basket";

const BasketChevronQuantity = ({ productId }) => {
  const qtyProduct = useSelector(getQtyProductsBasket(productId));

  return (
    <>
      {qtyProduct !== 0 && (
        <div className={style.chevron_quantity__wrapper}>
          <span className={style.chevron_quantity__info}>{qtyProduct}</span>
        </div>
      )}
    </>
  );
};

export default BasketChevronQuantity;
