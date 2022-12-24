import React, { useEffect } from "react";
import CollectionHeader from "../../ui/collectionComponents/collectionHeader/collectionHeader";
import CollectionCategories from "../../ui/collectionComponents/collectionCategories/collectionCategories";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCollectionCategoryByPath,
  getCollectionIdByPath,
} from "../../../store/slices/collectionCategory";
import { loadProductByCollectionPathAndCategoryPath } from "../../../store/slices/product";
import { getCategoryByIds } from "../../../store/slices/category";

const CollectionPage = () => {
  const { collection: collectionPath } = useParams();
  const dispatch = useDispatch();
  const defaultLength = 4;

  const collectionCategory = useSelector(
    getCollectionCategoryByPath(collectionPath)
  );

  const collectionId = useSelector(getCollectionIdByPath(collectionPath));
  const categoriesData = useSelector(
    getCategoryByIds(collectionCategory.categories)
  );

  useEffect(() => {
    categoriesData.forEach((c) => {
      dispatch(
        loadProductByCollectionPathAndCategoryPath(
          collectionPath,
          c.path,
          collectionId,
          c._id,
          defaultLength
        )
      );
    });

    // eslint-disable-next-line
  }, [collectionPath]);

  return (
    <>
      <CollectionHeader
        {...{
          name: collectionCategory.name,
          path: collectionPath,
        }}
      />

      <CollectionCategories
        {...{
          collectionPath,
          categories: categoriesData,
        }}
      />
    </>
  );
};

export default CollectionPage;
