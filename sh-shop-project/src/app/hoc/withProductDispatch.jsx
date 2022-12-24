import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../components/common/loadingComponent/loading";
import {
  getProductByIds,
  getProductLengthLoadingStatus,
  loadProductByIds,
} from "../store/slices/product";

const withProductDispatch =
  (Component) =>
  ({ ...rest }) => {
    const { product: productIds, redirectToProduct } = rest;

    const dispatch = useDispatch();
    const isLoadingProducts = useSelector(getProductLengthLoadingStatus());
    const productSelector = useSelector(getProductByIds(productIds));

    useEffect(() => {
      dispatch(loadProductByIds(productIds));
      // eslint-disable-next-line
    }, [productIds]);

    return (
      <>
        {!isLoadingProducts && productSelector ? (
          <>
            {productSelector.length === productIds.length ? (
              <>
                {productSelector.map((product) => (
                  <Component
                    key={product._id}
                    {...{ product, redirectToProduct }}
                  />
                ))}
              </>
            ) : (
              <Loading />
            )}
          </>
        ) : (
          <Loading />
        )}
      </>
    );
  };

export default withProductDispatch;
