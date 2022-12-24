import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./productCardPage.module.scss";
import ProductImage from "../../../ui/productCard/productImage/productImage";
import ProductTitle from "../.././../ui/productCard/productTitle/productTitle";
import ProductDescription from "../../../ui/productCard/productDescription/productDescription";
import ProductSize from "../../../ui/productCard/productSize/productSize";
import ProducsColor from "../../../ui/productCard/producsColor/producsColor";
import RenderPrice from "../../../common/priceComponent/renderPrice/renderPrice";
import withBasketAction from "../../../../hoc/basketHoc/withBasketAction";
import AddBasketButton from "../../../common/buttonComponent/addBasketButton/addBasketButton";

const ProductCardPage = ({ product, productId }) => {
  const {
    imgUrl,
    otherImg,
    name,
    articleNumber,
    prices,
    description,
    sizes,
    colors,
  } = product;

  const ButtonWithBasketAction = withBasketAction(AddBasketButton);
  const [data, setData] = useState({ sizes: [], colors: [] });

  const handleChange = (data) => {
    setData((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  return (
    <>
      <div className={style.product_card_page}>
        <div className={style.product_card_page__wrapper}>
          <div className={style.product_card_page__item}>
            <ProductImage {...{ imgUrl, otherImg }} />
          </div>

          <div className={style.product_card_page__item}>
            <div className={style.product_card_page__item_info}>
              <ProductTitle {...{ name, articleNumber }} />
              <RenderPrice {...{ prices }} />
              <ProductDescription {...{ description }} />
              <ProductSize onChange={handleChange} sizes={sizes} />
              <ProducsColor onChange={handleChange} colors={colors} />

              {/* check for COMMING SOON */}
              {prices && <ButtonWithBasketAction {...{ productId, data }} />}
            </div>
          </div>
        </div>
      </div>

      <div className={style.product_card_page__links}>
        <NavLink
          className={(isActive) =>
            isActive
              ? style.product_card_page__navLink_active
              : style.product_card_page__navLink
          }
          to={`/product/${productId}/decription`}>
          description
        </NavLink>

        <NavLink
          className={(isActive) =>
            isActive
              ? style.product_card_page__navLink_active
              : style.product_card_page__navLink
          }
          to={`/product/${productId}/reviews`}>
          reviews
        </NavLink>
      </div>
    </>
  );
};

export default ProductCardPage;
