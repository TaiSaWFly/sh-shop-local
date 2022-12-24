import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { returnCaterogiesWithoutCurrentCategoryId } from "../../../../utils/returnCaterogiesWithoutCurrentCategoryId";
import { definedLengthArray } from "../../../../utils/definedLengthArray";
import { getProductLength } from "../../../../store/slices/product";
import { getCollectionIdByPath } from "../../../../store/slices/collectionCategory";
import { getCategoryByIds } from "../../../../store/slices/category";

const RenderCategoryLinks = ({ categoryId, collectionPath }) => {
  const productsLength = useSelector(getProductLength());
  const collectionId = useSelector(getCollectionIdByPath(collectionPath));

  const categoriesIds = returnCaterogiesWithoutCurrentCategoryId({
    categoryId,
    collectionId,
    productsLength,
  });
  const definedLengthCategories = definedLengthArray(categoriesIds, 3);
  const categories = useSelector(getCategoryByIds(definedLengthCategories));

  const renderCategoryLink = (collectionPath, name, categoryPath) => {
    return (
      <Link
        to={{
          pathname: `/collection/${
            collectionPath + "/" + categoryPath
          }/products`,
        }}>
        {name}
      </Link>
    );
  };

  return (
    <>
      {categories.map((d, i, arr) =>
        i === arr.length - 1 ? (
          <span key={d._id}>
            {" and"} {renderCategoryLink(collectionPath, d.name, d.path)}
          </span>
        ) : i === arr.length - 2 ? (
          <span key={d._id}>
            {renderCategoryLink(collectionPath, d.name, d.path)}
          </span>
        ) : (
          <span key={d._id}>
            {renderCategoryLink(collectionPath, d.name, d.path)}
            {", "}
          </span>
        )
      )}
    </>
  );
};

export default RenderCategoryLinks;
