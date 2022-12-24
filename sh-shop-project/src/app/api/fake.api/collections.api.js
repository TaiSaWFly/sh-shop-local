import api from "..";

const collection = [
  {
    id: "collection_1",
    name: "Women",
    path: "women",
  },
  {
    id: "collection_2",
    name: "Men",
    path: "men",
  },
  {
    id: "collection_3",
    name: "Kids",
    path: "kids",
  },
  {
    id: "collection_4",
    name: "Comming Soon",
    path: "commingsoon",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(collection);
    }, 1000);
  });

const getCollectionById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(collection.find((c) => c.id === id));
    }, 1000);
  });

const getCollectionByPath = (path) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(collection.find((c) => c.path === path));
    }, 1000);
  });

const getCollectionIdByPath = (path) =>
  new Promise((resolve) => {
    window.setTimeout(async function () {
      const findCollectionId = findCollectionIdByPath(path);
      resolve(findCollectionId);
    }, 1000);
  });

const getCollectionProductsByPath = (path) =>
  new Promise((resolve) => {
    window.setTimeout(async function () {
      const findCollectionId = findCollectionIdByPath(path);
      const allPoducts = await api.products
        .getProductsByCollectionId(findCollectionId)
        .then((data) => data);
      resolve(allPoducts);
    }, 1000);
  });

function findCollectionIdByPath(path) {
  const collectionId = collection.find((c) => c.path === path).id;
  return collectionId;
}

const functions = {
  fetchAll,
  getCollectionById,
  getCollectionByPath,
  getCollectionIdByPath,
  getCollectionProductsByPath,
};

export default functions;
