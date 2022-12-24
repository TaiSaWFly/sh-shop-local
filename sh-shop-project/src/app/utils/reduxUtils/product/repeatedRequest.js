import { findProductByCollectionId } from "./findProductByCollectionId";
import { findProductByCollectionIdAndCategoryId } from "./findProductByCollectionIdAndCategoryId";
import { getCurrentProductslength } from "./getCurrentProductslength";

export function repeatedRequest({
  collectionId,
  categoryId,
  products,
  productslength,
  definedLength,
}) {
  let tryRequest = true;

  if (categoryId) {
    const foundProducts = findProductByCollectionIdAndCategoryId(
      products,
      collectionId,
      categoryId
    );

    const categoryLength = getCurrentProductslength({
      entitiesLength: productslength,
      collectionId: collectionId,
      categoryId: categoryId,
    });

    tryRequest =
      definedLength <= foundProducts.length
        ? false
        : foundProducts.length >= categoryLength
        ? false
        : true;
  } else {
    const collectionLength = getCurrentProductslength({
      entitiesLength: productslength,
      collectionId: collectionId,
    });

    const foundProducts = findProductByCollectionId(products, collectionId);

    tryRequest =
      definedLength <= foundProducts.length
        ? false
        : foundProducts.length >= collectionLength
        ? false
        : true;
  }

  return tryRequest;
}
