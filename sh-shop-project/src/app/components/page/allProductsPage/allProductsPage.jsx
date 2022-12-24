import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import withProductFilter from "../../../hoc/withProductFilter/withProductFilter";
import { getCategoryByPath } from "../../../store/slices/category";
import { getCollectionCategoryByPath } from "../../../store/slices/collectionCategory";
import { removeFilterData } from "../../../store/slices/filterMemory";
import {
  getProductByCollectionId,
  getProductByCollectionIdAndCategoryId,
  getProductLoadingStatus,
  loadProductByCollectionPath,
  loadProductByCollectionPathAndCategoryPath,
} from "../../../store/slices/product";
import Loading from "../../common/loadingComponent/loading";
import CollectionHeader from "../../ui/collectionComponents/collectionHeader/collectionHeader";
import ProductItems from "../../ui/collectionComponents/productItems/productItems";

const AllProductsPage = () => {
  const { collection: collectionPath, category: categoryPath } = useParams();
  const dispatch = useDispatch();
  const defaultLength = 8;

  // States
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState();
  const [limit, setLimit] = useState(defaultLength);

  // HOC
  const ProductItemsWithProductFilter = withProductFilter(ProductItems);

  // Selectors
  const collection = useSelector(getCollectionCategoryByPath(collectionPath));
  const category = useSelector(getCategoryByPath(categoryPath));
  const dataProductsSelectorByCollectionId = useSelector(
    getProductByCollectionId(collection._id, limit)
  );
  const dataProductsSelectorByCollectionIdAndCategoryId = useSelector(
    getProductByCollectionIdAndCategoryId(collection._id, category?._id, limit)
  );

  // Loading
  const isLoadingProducts = useSelector(getProductLoadingStatus());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [collectionPath]);

  useEffect(() => {
    setLoading(true);

    if (categoryPath) {
      dispatch(
        loadProductByCollectionPathAndCategoryPath(
          collectionPath,
          categoryPath,
          collection._id,
          category._id,
          limit
        )
      );

      setProducts(dataProductsSelectorByCollectionIdAndCategoryId);
    } else {
      dispatch(
        loadProductByCollectionPath(collectionPath, collection._id, limit)
      );

      setProducts(dataProductsSelectorByCollectionId);
    }

    // eslint-disable-next-line
  }, [collectionPath, categoryPath, isLoadingProducts, limit]);

  useEffect(() => {
    setLimit(defaultLength);
    dispatch(removeFilterData());

    // eslint-disable-next-line
  }, [collectionPath, categoryPath]);

  useEffect(() => {
    if (products && !isLoadingProducts) {
      setLoading(false);
    }
  }, [products, isLoadingProducts]);

  const handleMoreProduct = () => {
    setLimit((prevState) => prevState + defaultLength);
  };

  return (
    <>
      <CollectionHeader
        {...{
          name: category ? category.name : collection.name,
        }}
      />

      {!isLoading ? (
        <>
          <ProductItemsWithProductFilter
            {...{
              products,
              collectionPath,
              collection,
              category,
              limit,
              handleMoreProduct,
            }}
          />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default AllProductsPage;
