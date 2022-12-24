import api from "..";

const collectionCategories = [
  {
    id: "collCategory_1",
    collection: "collection_1",
    categories: ["category_2", "category_3", "category_7", "category_8"],
  },
  {
    id: "collCategory_2",
    collection: "collection_2",
    categories: [
      "category_1",
      "category_2",
      "category_3",
      "category_6",
      "category_7",
      "category_8",
      "category_9",
    ],
  },
  {
    id: "collCategory_3",
    collection: "collection_3",
    categories: ["category_1", "category_5", "category_9", "category_8"],
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(collectionCategories);
    }, 1000);
  });

const getCollCategoryByCollectionPath = (path) =>
  new Promise((resolve) => {
    window.setTimeout(async function () {
      const getCollectionId = await api.collections
        .getCollectionIdByPath(path)
        .then((data) => data);
      const getCollCategory = getCollCategoryByCollectionId(getCollectionId);
      resolve(getCollCategory);
    });
  });

const getCategoryByCollectionCategoryId = (id) =>
  new Promise((resolve) => {
    window.setTimeout(async function () {
      const getCategories = await api.categories
        .fetchAll()
        .then((data) => data);
      const collCategory = collectionCategories.find((c) => c.id === id);
      const category = getDataByIds(collCategory.categories, getCategories);
      resolve(category);
    });
  });

const getCollectionCategoryWithProductsByCollectionPath = (path) =>
  new Promise((resolve) => {
    window.setTimeout(async function () {
      const collectionId = await api.collections
        .getCollectionIdByPath(path)
        .then((data) => data);

      const getCollCategory = getCollCategoryByCollectionId(collectionId);

      const getCategories = await api.categories
        .fetchAll()
        .then((data) => data);

      const resolveData = transformResolvedData(
        collectionId,
        getCategories,
        getCollCategory.categories
      );

      resolve(resolveData);
    }, 1000);
  });

function getDataByIds(dataIds, data) {
  const newData = [];
  for (const dataId of dataIds) {
    for (const d of data) {
      if (d.id === dataId) {
        newData.push(d);
      }
    }
  }
  return newData;
}

function getCollCategoryByCollectionId(id) {
  const getCollCategory = collectionCategories.find((c) => c.collection === id);
  return getCollCategory;
}

async function transformResolvedData(collectionId, categories, categoriesIds) {
  const arrCat = getDataByIds(categoriesIds, categories);
  let data = [];

  for (const d in arrCat) {
    const dataP = await api.products
      .getProductsByCollectionIdAndCategoryId(collectionId, arrCat[d].id)
      .then((data) => data);

    data.push({
      ...arrCat[d],
      products: dataP,
    });
  }

  return data;
}

const functions = {
  fetchAll,
  getCategoryByCollectionCategoryId,
  getCollectionCategoryWithProductsByCollectionPath,
  getCollCategoryByCollectionPath,
};

export default functions;
