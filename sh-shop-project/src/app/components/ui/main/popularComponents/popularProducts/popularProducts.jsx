import React, { useState, useEffect } from "react";
import style from "./popularProducts.module.scss";
import PopularListItem from "../popularListItem/popularListItem";
import Loading from "../../../../common/loadingComponent/loading";
import { useHistory } from "react-router-dom";
import PopularProduct from "../popularProduct/popularProduct";
import { useSelector } from "react-redux";
import { getPopular } from "../../../../../store/slices/popular";
import withProductDispatch from "../../../../../hoc/withProductDispatch";

const PopularProducts = () => {
  const history = useHistory();
  const PopularProductWithProductDispatch = withProductDispatch(PopularProduct);

  const [products, setProducts] = useState();
  const [populars, setPopulars] = useState();
  const [currentListId, setCurrentListId] = useState();

  const popularSelector = useSelector(getPopular());

  useEffect(() => {
    setPopulars(popularSelector);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (populars) {
      const initDefaultData = populars.find((_, index) => index === 0);
      setProducts(initDefaultData.products);
      setCurrentListId(initDefaultData._id);
    }
  }, [populars]);

  const handleFilterProducts = (currentListId) => {
    const dataIndex = populars.findIndex((p) => p._id === currentListId);
    const poducts = populars[dataIndex].products;
    setProducts(poducts);
    setCurrentListId(currentListId);
  };

  const handleRedirectToProduct = (id) => {
    history.push(`/product/${id}`);
  };

  return (
    <div className={style.popular_products}>
      {populars && products ? (
        <>
          <ul className={style.popular_products__list}>
            {populars.map((c) => (
              <PopularListItem
                key={c._id}
                listId={c._id}
                currentListId={currentListId}
                name={c.name}
                handleFilter={handleFilterProducts}
              />
            ))}
          </ul>

          <div className={style.popular_items}>
            <PopularProductWithProductDispatch
              product={products}
              redirectToProduct={handleRedirectToProduct}
            />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default PopularProducts;
