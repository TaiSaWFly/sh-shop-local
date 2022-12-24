module.exports = (products, withOutIds) => {
  let newData = products;

  for (const i in withOutIds) {
    const index = newData.findIndex((d) => withOutIds[i] === d._id.toString());
    newData.splice(index, 1);
  }

  return newData;
};
