import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToBasket,
  getIsExistingProductInBasket,
  getQtyProductsBasket,
} from "../../store/slices/basket";
import { getProductByIds } from "../../store/slices/product";

const withBasketAction =
  (Component) =>
  ({ ...rest }) => {
    const { productId, data } = rest;
    const dispatch = useDispatch();

    const qtyProduct = useSelector(getQtyProductsBasket(productId));

    const inBasket = useSelector(getIsExistingProductInBasket(productId));
    const product = useSelector(getProductByIds(productId));
    const colorAndSizeData = data ? data : { sizes: [], colors: [] };

    const handleAddProduct = () => {
      const resData = {
        productId: product._id,
        imgUrl: product.imgUrl,
        name: product.name,
        prices: product.prices.newPrice
          ? product.prices.newPrice
          : product.prices.price,
        articleNumber: product.articleNumber,
        quantity: 1,
        ...colorAndSizeData,
      };

      dispatch(addProductToBasket(resData));
    };

    return (
      <>
        <Component {...{ inBasket, qty: qtyProduct, handleAddProduct }} />
      </>
    );
  };

export default withBasketAction;
