import React from "react";
import style from "./renderPrice.module.scss";
import Price from "../price";

const RenderPrice = ({ prices }) => {
  return (
    <>
      {prices && (
        <div className={style.product_price}>
          {prices.newPrice ? (
            <div>
              <span className={style.product_price_old}>
                <Price price={prices.price} />
              </span>
              <Price price={prices.newPrice} />
            </div>
          ) : (
            <Price price={prices.price} />
          )}
        </div>
      )}
    </>
  );
};

export default RenderPrice;
