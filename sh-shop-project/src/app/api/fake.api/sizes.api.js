const size = [
  { id: "size_1", value: 38 },
  { id: "size_2", value: 39 },
  { id: "size_3", value: 40 },
  { id: "size_4", value: 41 },
  { id: "size_5", value: 42 },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(size);
    }, 1000);
  });

const getSizesByIds = (ids) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      const sizes = getDataSizesByIds(ids, size);
      resolve(sizes);
    }, 1000);
  });

function getDataSizesByIds(dataIds, sizes) {
  const newData = [];
  for (const dataId of dataIds) {
    for (const s of sizes) {
      if (s.id === dataId) {
        newData.push(s);
      }
    }
  }
  return newData;
}

const functions = {
  fetchAll,
  getSizesByIds,
};

export default functions;
