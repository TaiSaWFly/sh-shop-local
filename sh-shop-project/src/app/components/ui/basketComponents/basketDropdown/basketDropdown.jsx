import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../../common/buttonComponent/button";
import Price from "../../../common/priceComponent/price";
import style from "./basketDropdown.module.scss";
import {
  decrementBasketElement,
  deleteProductFromBasket,
  incrementBasketElement,
} from "../../../../store/slices/basket";
import BasketQuantity from "../basketQuantity/basketQuantity";

const BasketDropdown = ({
  basketData,
  totalAmount,
  dropdown,
  followUpBasketDropdownDismount,
}) => {
  const dispatch = useDispatch();

  const handleDeleteProductFromBasket = (id) => {
    dispatch(deleteProductFromBasket(id));
  };

  const handleDecrementBasketElement = (id) => {
    dispatch(decrementBasketElement(id));
  };

  const handleIncrementBasketElement = (id) => {
    dispatch(incrementBasketElement(id));
  };

  useEffect(() => {
    return () => {
      followUpBasketDropdownDismount(false);
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div
      className={
        dropdown
          ? style.basket_link__dropdown_wrapper_show
          : style.basket_link__dropdown_wrapper_hide
      }>
      <div className={style.basket_link__dropdown}>
        {basketData.map((b) => (
          <div key={b._id} className={style.dropdown}>
            <Link
              to={`/product/${b.productId}`}
              className={style.basket_img__link}>
              <img alt="pic" src={require(`/src/${b.imgUrl}`)} />
            </Link>
            <div className={style.product_name}>
              <span>{b.name}</span>
            </div>
            <div className={style.product_price}>
              <Price price={b.amount} />
            </div>

            <div className={style.product_quantity}>
              <BasketQuantity
                id={b._id}
                quantity={b.quantity}
                {...{
                  handleDecrementBasketElement,
                  handleIncrementBasketElement,
                }}
              />
            </div>

            <div className={style.product_delete}>
              <Button
                onAction={() => handleDeleteProductFromBasket(b._id)}
                className={"button_table__delete"}></Button>
            </div>
          </div>
        ))}
        <div className={style.product_subtotal}>
          <p>subtotal:</p>
          <Price price={totalAmount} />
        </div>
      </div>
    </div>
  );
};

export default BasketDropdown;
