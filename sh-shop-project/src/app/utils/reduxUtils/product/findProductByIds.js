export function findProductByIds(products, ids) {
  let data = [];

  if (Array.isArray(ids)) {
    for (const i in ids) {
      for (const p in products) {
        if (ids[i] === products[p]._id) {
          data.push(products[p]);
        }
      }
    }
  } else {
    data = products.find((p) => p._id === ids);
  }

  return data;
}
