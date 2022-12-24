module.exports = (collCategories, collections) => {
  const newData = [];

  for (const collCat in collCategories) {
    for (const c in collections) {
      if (collCategories[collCat].collectionId === collections[c]._id) {
        newData.push({
          _id: collections[c]._id,
          name: collections[c].name,
          path: collections[c].path,
          categories: collCategories[collCat].categories,
        });
      }
    }
  }

  return newData;
};
