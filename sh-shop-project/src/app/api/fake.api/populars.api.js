import api from "..";
import { definedLengthArray } from "../../utils/definedLengthArray";

let isLoading = false;

const popular = [
  // { id: "popular_1", name: "popular", products: [] },
  // { id: "popular_2", name: "new arrivals", products: [] },
  // { id: "popular_3", name: "best sellers", products: [] },
  // { id: "popular_4", name: "special offers", products: [] },
  // { id: "popular_5", name: "comming soon", products: [] },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(async function () {
      if (!isLoading) {
        const popularProducts = await getPopularProducts();
        popular.push(popularProducts);
        const newArrivalsProducts = await getNewArrivalsProducts();
        popular.push(newArrivalsProducts);
        const productsBySales = await getProductsBySales();
        popular.push(productsBySales);
        const productsOfOffers = await getProductsOfOffers();
        popular.push(productsOfOffers);
        const commingSoonProducts = await getCommingSoonProducts();
        popular.push(commingSoonProducts);

        resolve(popular);
        isLoading = true;
      } else {
        resolve(popular);
      }
    }, 1000);
  });

async function getPopularProducts() {
  const getProducts = await api.products
    .getPopularProducts()
    .then((data) => data);
  const definedLengthProductsArray = definedLengthArray(getProducts, 6);

  return {
    id: "popular_1",
    name: "popular",
    products: definedLengthProductsArray,
  };
}

async function getNewArrivalsProducts() {
  const getProducts = await api.products
    .getNewArrivalsProducts()
    .then((data) => data);
  const definedLengthProductsArray = definedLengthArray(getProducts, 6);

  return {
    id: "popular_2",
    name: "new arrivals",
    products: definedLengthProductsArray,
  };
}

async function getProductsBySales() {
  const getProducts = await api.products
    .getProductsBySales()
    .then((data) => data);
  const definedLengthProductsArray = definedLengthArray(getProducts, 6);

  return {
    id: "popular_3",
    name: "best sellers",
    products: definedLengthProductsArray,
  };
}

async function getProductsOfOffers() {
  const getProducts = await api.products
    .getProductsOfOffers()
    .then((data) => data);
  const definedLengthProductsArray = definedLengthArray(getProducts, 6);

  return {
    id: "popular_4",
    name: "special offers",
    products: definedLengthProductsArray,
  };
}

async function getCommingSoonProducts() {
  const getProducts = await api.products
    .getProductsByCollectionId("collection_4")
    .then((data) => data);
  const definedLengthProductsArray = definedLengthArray(getProducts, 6);

  return {
    id: "popular_5",
    name: "comming soon",
    products: definedLengthProductsArray,
  };
}

const functions = {
  fetchAll,
};

export default functions;
