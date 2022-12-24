const historyPurchase = [
  {
    id: "history_1",
    userId: "user_1",
    order: "#33345",
    orderDate: "1667800963756",
    products: ["product_11", "product_50"],
    status: "open",
    shipDate: "1677800963756",
    total: "178",
  },
  {
    id: "history_2",
    userId: "user_1",
    order: "#39545",
    orderDate: "1667600963756",
    products: ["product_11"],
    status: "open",
    shipDate: "1677700963756",
    total: "178",
  },
  {
    id: "history_3",
    userId: "user_2",
    order: "#39577",
    orderDate: "1647600963756",
    products: ["product_12", "product_35"],
    status: "open",
    shipDate: "1675700963756",
    total: "178",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(historyPurchase);
    }, 1000);
  });

const getHistoryByUserId = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(historyPurchase.filter((h) => h.userId === id));
    }, 1000);
  });

const functions = {
  fetchAll,
  getHistoryByUserId,
};

export default functions;
