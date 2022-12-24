import React, { useState, useEffect } from "react";
import TitleComponent from "../../common/titleComponent/titleComponent";
import Loading from "../../common/loadingComponent/loading";
import ProductItems from "../../ui/collectionComponents/productItems/productItems";
import ComponentContainer from "../../common/componentContainer/componentContainer";
import productService from "../../../services/product.service";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByIds,
  getProductLoadingStatus,
  loadProductByIds,
} from "../../../store/slices/product";

const NewArrivalsPage = () => {
  const dispatch = useDispatch();
  const [productIds, setDataIds] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const isLoadingProducts = useSelector(getProductLoadingStatus());
  const products = useSelector(getProductByIds(productIds));

  useEffect(() => {
    setIsLoading(true);
    productService
      .getProductNewArrivals()
      .then((data) => setDataIds(data.content));
  }, []);

  useEffect(() => {
    if (productIds) {
      dispatch(loadProductByIds(productIds));
    }

    // eslint-disable-next-line
  }, [productIds]);

  useEffect(() => {
    if (productIds && !isLoadingProducts) {
      setIsLoading(false);
    }
  }, [productIds, isLoadingProducts]);

  return (
    <ComponentContainer>
      <>
        <TitleComponent
          title="New Arrivals"
          subtitle="Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo."
        />
        {!isLoading ? <ProductItems productsItems={products} /> : <Loading />}
      </>
    </ComponentContainer>
  );
};

export default NewArrivalsPage;
