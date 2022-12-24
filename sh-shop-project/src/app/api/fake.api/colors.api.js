const color = [
  {
    id: "color_1",
    name: "Red",
    hex: "#dc3545",
  },
  {
    id: "color_2",
    name: "Green",
    hex: "#005945",
  },
  {
    id: "color_3",
    name: "Blue",
    hex: "#00c8c8",
  },
  {
    id: "color_4",
    name: "Grey",
    hex: "#747474",
  },
  {
    id: "color_5",
    name: "Black",
    hex: "#222222",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(color);
    }, 1000);
  });

const getColorsByIds = (ids) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      const colors = getDataColorsByIds(ids, color);
      resolve(colors);
    }, 1000);
  });

function getDataColorsByIds(dataIds, colors) {
  const newData = [];
  for (const dataId of dataIds) {
    for (const c of colors) {
      if (c.id === dataId) {
        newData.push(c);
      }
    }
  }
  return newData;
}

const functions = {
  fetchAll,
  getColorsByIds,
};

export default functions;
