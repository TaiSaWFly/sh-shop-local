import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Basket } from "../../../../../../node_modules/bootstrap-icons/icons/handbag-fill.svg";
import {
  getAllProductsQtyBasket,
  getBasketData,
  getSubtotalBasketAmount,
} from "../../../../store/slices/basket";
import BasketDropdown from "../basketDropdown/basketDropdown";
import style from "./basketLink.module.scss";

const BasketLink = () => {
  const basketData = useSelector(getBasketData());
  const allquantity = useSelector(getAllProductsQtyBasket());
  const totalAmount = useSelector(getSubtotalBasketAmount());
  const [dropdown, setDropdown] = useState(false);

  const followUpBasketDropdownDismount = (dropdown) => {
    setDropdown(dropdown);
  };

  return (
    <div
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
      className={style.basket_link}>
      <div className={style.basket_link__wrapper}>
        <Link to="/basket" className={style.basket_link__action}>
          <Basket
            className={style.basket_link__icon}
            width="20px"
            height="20px"
          />
          <span>basket</span>

          {basketData && (
            <>
              {basketData.length !== 0 && (
                <div className={style.basket_link__products_quantity}>
                  <span>{allquantity}</span>
                </div>
              )}
              {dropdown && basketData.length !== 0 && (
                <span className={style.basket_link__arrow}></span>
              )}
            </>
          )}
        </Link>
      </div>
      {basketData && basketData.length !== 0 && (
        <BasketDropdown
          {...{
            basketData,
            totalAmount,
            dropdown,
            followUpBasketDropdownDismount,
          }}
        />
      )}
    </div>
  );
};

export default BasketLink;
