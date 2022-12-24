export function checkDouble(product, content) {
  const data = [...product, ...content];

  const newData = data.reduce((arr, d) => {
    if (!arr.find((a) => a._id === d._id)) {
      arr.push(d);
    }
    return arr;
  }, []);

  return newData;
}
