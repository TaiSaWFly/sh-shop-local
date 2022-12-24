export function transformCollectionFooterData({
  footerList,
  productsLenght,
  collectionCaterogy,
}) {
  let cloneFooterList = [...footerList];
  const lenght = [...productsLenght];
  const collection = [...collectionCaterogy];

  const path = "/collection/";

  let data = [];

  for (const l in lenght) {
    for (const c in collection) {
      if (lenght[l]._id === collection[c]._id) {
        data.push({
          name: `${collection[c].name} (${lenght[l].currentLength})`,
          path: path + collection[c].path + "/products",
        });
      }
    }
  }

  const collectionData = {
    title: "collection",
    list: data,
  };

  cloneFooterList.unshift(collectionData);

  return cloneFooterList;
}
