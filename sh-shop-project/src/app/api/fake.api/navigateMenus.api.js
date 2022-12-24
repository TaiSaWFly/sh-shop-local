import api from "..";

const navigateMenus = [
  {
    id: "menu_1",
    collection: "collection_1",
    submenu: {
      collectionCategories: "collCategory_1",
    },
  },
  {
    id: "menu_2",
    collection: "collection_2",
    submenu: {
      collectionCategories: "collCategory_2",
    },
  },
  {
    id: "menu_3",
    collection: "collection_3",
    submenu: {
      collectionCategories: "collCategory_3",
    },
  },
  {
    id: "menu_4",
    collection: "collection_4",
  },
  {
    id: "menu_5",
    path: "/about",
    name: "About",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(navigateMenus);
    }, 1000);
  });

const getMenusItems = () =>
  new Promise((resolve) => {
    window.setTimeout(async function () {
      const data = await api.collections.fetchAll().then((data) => data);
      const transformedData = transformData(navigateMenus, data);
      resolve(transformedData);
    }, 1000);
  });

const transformData = (menus, data) => {
  const newData = [];
  for (const m in menus) {
    for (const d in data) {
      if (menus[m].submenu) {
        if (menus[m].collection === data[d].id) {
          newData.push({
            ...data[d],
            categories: [menus[m].submenu.collectionCategories],
          });
        }
      }

      if (!menus[m].submenu && menus[m].collection) {
        if (menus[m].collection === data[d].id) {
          newData.push({
            ...data[d],
            categories: null,
          });
        }
      }
    }

    if (!menus[m].submenu && !menus[m].collection) {
      newData.push({
        ...menus[m],
      });
    }
  }
  return newData;
};

const functions = {
  fetchAll,
  getMenusItems,
};

export default functions;
