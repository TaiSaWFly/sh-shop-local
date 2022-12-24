module.exports = (collection, categories, products) => {
  const newData = {
    id: collection.id,
    name: collection.name,
    path: collection.path,
    categories: [],
  };

  for (const c in categories) {
    for (const p in products) {
      if (categories[c].id === products[p].id) {
        newData.categories.push({
          id: categories[c].id,
          name: categories[c].name,
          path: categories[c].path,
          products: products[p].products,
        });
      }
    }
  }

  return newData;
};
