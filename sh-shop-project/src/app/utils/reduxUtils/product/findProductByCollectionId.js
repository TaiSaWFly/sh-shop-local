export function findProductByCollectionId(products, collectionId) {
  const data = products.filter((p) => p.collectionId === collectionId);
  return data;
}
