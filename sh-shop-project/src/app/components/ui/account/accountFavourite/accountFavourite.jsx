import React, { useEffect } from "react";
import style from "./accountFavourite.module.scss";
import ProductDescriptionShort from "../../../common/productDescriptionShort/productDescriptionShort";
import { useHistory } from "react-router-dom";
import Loading from "../../../common/loadingComponent/loading";
import BackButton from "../../../common/buttonComponent/backButton";
import { useDispatch, useSelector } from "react-redux";
import { getFavourite } from "../../../../store/slices/favourite";
import {
  getProductByIds,
  getProductLoadingStatus,
  loadProductByIds,
} from "../../../../store/slices/product";
import BasketChevronQuantity from "../../../common/chevrons/basketChevronQuantity/basketChevronQuantity";

const AccountFavourite = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const favourite = useSelector(getFavourite());
  const favouriteProducts = useSelector(getProductByIds(favourite));
  const isLoadingProducts = useSelector(getProductLoadingStatus());

  const handleRedirectToProduct = (id) => {
    history.push(`/product/${id}`);
  };

  useEffect(() => {
    dispatch(loadProductByIds(favourite));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={style.favourite_products}>
      <BackButton className={style.favourite__back_button} urlBack="/account">
        go back
      </BackButton>

      {!isLoadingProducts ? (
        favouriteProducts.map((p) => (
          <div key={p._id} className={style.product_item}>
            <div className={style.product_wrapper}>
              <div
                onClick={() => handleRedirectToProduct(p._id)}
                className={style.product_img}>
                <img alt="pic" src={require(`/src/${p.imgUrl}`)} />

                <BasketChevronQuantity productId={p._id} />
              </div>

              <ProductDescriptionShort
                {...{
                  id: p._id,
                  name: p.name,
                  prices: p.prices,
                  description: p.description,
                  titleSize: "1.2rem",
                  textSize: "1.15rem",
                  QTYSentences: 2,
                }}
              />
            </div>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default AccountFavourite;
