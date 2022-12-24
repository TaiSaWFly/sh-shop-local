module.exports = (products, categories) => {
  const newData = [];

  for (const c in categories) {
    const filteredProducts = products.filter(
      (p) => p.categoryId === categories[c]
    );
    newData.push({
      id: categories[c],
      products: filteredProducts,
    });
  }

  return newData;
};
