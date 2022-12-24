module.exports = (menus, collections, collCategories) => {
  const newData = [];

  for (const m in menus) {
    for (const c in collections) {
      if (menus[m].submenu) {
        if (menus[m].collectionId === collections[c]._id) {
          const collCategory = collCategories.find(
            (c) => c._id === menus[m].submenu.collectionCategories
          );

          newData.push({
            _id: menus[m]._id,
            collectionId: collections[c]._id,
            name: collections[c].name,
            path: collections[c].path,
            categories: collCategory.categories,
          });
        }
      }

      if (!menus[m].submenu && menus[m].collectionId) {
        if (menus[m].collectionId === collections[c]._id) {
          newData.push({
            _id: menus[m]._id,
            collectionId: collections[c]._id,
            name: collections[c].name,
            path: collections[c].path,
            categories: [],
          });
        }
      }
    }

    if (!menus[m].submenu && !menus[m].collectionId) {
      newData.push({
        _id: menus[m]._id,
        name: menus[m].name,
        path: menus[m].path,
      });
    }
  }

  return newData;
};
