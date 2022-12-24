import React, { useState } from "react";
import RenderPrice from "../../../../common/priceComponent/renderPrice/renderPrice";
import DropdownPopularDescription from "../dropdownPopularDescription/dropdownPopularDescription";
import style from "./popularProduct.module.scss";

const PopularProduct = ({ product, redirectToProduct }) => {
  const { _id, imgUrl, otherImg, prices } = product;
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className={style.popular_product}>
      <div className={style.popular_product__wrapper}>
        <div
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
          className={style.popular_product__link}>
          <div
            className={style.popular_product__img}
            onClick={() => redirectToProduct(_id)}>
            <img alt="pic" src={require(`/src/${imgUrl}`)} />
            <div className={style.popular_product__imgs}>
              {otherImg.map((img, index) => (
                <div key={index} className={style.product_imgs}>
                  <img alt="pic" src={require(`/src/${img.imgUrl}`)} />
                </div>
              ))}
            </div>
            <div className={style.popular_product__price}>
              <RenderPrice {...{ prices }} />
            </div>
          </div>

          <DropdownPopularDescription {...{ product, dropdown }} />
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
