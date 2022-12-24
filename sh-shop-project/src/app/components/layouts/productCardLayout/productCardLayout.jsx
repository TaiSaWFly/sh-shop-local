import React from "react";
import { useEffect } from "react";
import { Redirect, Route, Switch, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ComponentContainer from "../../common/componentContainer/componentContainer";
import Loading from "../../common/loadingComponent/loading";
import ProductCardPage from "../../page/productCardPages/productCardPage/productCardPage";
import ProductDescriptionPage from "../../page/productCardPages/productDescriptionPage/productDescriptionPage";
import ReviewsPage from "../../page/productCardPages/reviewsPage/reviewsPage";
import style from "./productCardLayout.module.scss";
import {
  getProductByIds,
  loadProductByIds,
} from "../../../store/slices/product";

const ProductCardLayout = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const product = useSelector(getProductByIds(productId));

  useEffect(() => {
    dispatch(loadProductByIds([productId]));
    window.scrollTo(0, 0);

    // eslint-disable-next-line
  }, [productId]);

  return (
    <ComponentContainer>
      {product ? (
        <>
          <div className={style.product_card_page}>
            <ProductCardPage {...{ product, productId }} />
          </div>

          <div className={style.product_card_page__pages_info}>
            <Switch>
              <Route
                path={`/product/${productId}/decription`}
                component={ProductDescriptionPage}
              />

              <Route
                path={`/product/${productId}/reviews`}
                component={() => ReviewsPage({ ...{ productId } })}
              />

              <Redirect to={`/product/${productId}/decription`} from="*" />
            </Switch>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </ComponentContainer>
  );
};

export default ProductCardLayout;
