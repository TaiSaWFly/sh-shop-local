const category = [
  {
    id: "category_1",
    name: "Jackets",
    path: "jackets",
  },
  {
    id: "category_2",
    name: "Hoodies & Sweatshirts",
    path: "hoodies_&_sweatshirts",
  },
  {
    id: "category_3",
    name: "Polo Shirts",
    path: "polo_shirts",
  },
  {
    id: "category_4",
    name: "Sportswear",
    path: "sportswear",
  },
  {
    id: "category_5",
    name: "Trousers & Chinos",
    path: "trousers_&_chinos",
  },
  {
    id: "category_6",
    name: "T-Shirts",
    path: "t_shirts",
  },
  {
    id: "category_7",
    name: "Shirts",
    path: "shirts",
  },
  {
    id: "category_8",
    name: "Suits",
    path: "suits",
  },
  {
    id: "category_9",
    name: "Trousers",
    path: "trousers",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(category);
    }, 1000);
  });

const getCategoryById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(category.find((c) => c.id === id));
    }, 1000);
  });

const getCategoryByPath = (path) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(category.find((c) => c.path === path));
    }, 1000);
  });

const getCategoryIdByPath = (path) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      const categoryId = findCategoryIdByPath(path);
      resolve(categoryId);
    }, 1000);
  });

function findCategoryIdByPath(path) {
  const categoryId = category.find((c) => c.path === path).id;
  return categoryId;
}

const functions = {
  fetchAll,
  getCategoryById,
  getCategoryIdByPath,
  getCategoryByPath,
};

export default functions;
