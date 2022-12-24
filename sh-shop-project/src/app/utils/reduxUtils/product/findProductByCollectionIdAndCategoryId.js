export function findProductByCollectionIdAndCategoryId(
  products,
  collectionId,
  categoryId
) {
  const data = products.filter(
    (p) => p.collectionId === collectionId && p.categoryId === categoryId
  );
  return data;
}
