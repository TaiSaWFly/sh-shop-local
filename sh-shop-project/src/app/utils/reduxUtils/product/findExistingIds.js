import { findProductByCollectionId } from "./findProductByCollectionId";
import { findProductByCollectionIdAndCategoryId } from "./findProductByCollectionIdAndCategoryId";
import { findProductByIds } from "./findProductByIds";

export function findExistingIds({
  products,
  collectionId,
  categoryId,
  reqData,
}) {
  let foundProducts;

  if (!collectionId && !categoryId) {
    const data = findProductByIds(products, reqData);

    let newData = [...reqData];

    for (const d in data) {
      const index = newData.findIndex((id) => data[d]._id === id);
      newData.splice(index, 1);
    }

    foundProducts = newData;
  } else {
    if (categoryId) {
      foundProducts = findProductByCollectionIdAndCategoryId(
        products,
        collectionId,
        categoryId
      );
    } else {
      foundProducts = findProductByCollectionId(products, collectionId);
    }
  }

  const transformToIdsidsArray = foundProducts.map((p) => (p._id ? p._id : p));

  return transformToIdsidsArray;
}
