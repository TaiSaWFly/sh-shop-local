export function getCurrentProductslength({
  entitiesLength,
  collectionId,
  categoryId,
}) {
  let dataLength;

  if (categoryId) {
    const findCollection = entitiesLength.find((el) => el._id === collectionId);
    dataLength = findCollection.categories.find(
      (d) => d._id === categoryId
    ).length;
  } else {
    dataLength = entitiesLength.find(
      (el) => el._id === collectionId
    ).currentLength;
  }

  return dataLength;
}
