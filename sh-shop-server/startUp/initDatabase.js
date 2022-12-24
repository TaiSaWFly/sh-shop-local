const Color = require("../models/Color");
const Size = require("../models/Size");
const Collection = require("../models/Collection");
const Category = require("../models/Category");
const CollectionCategory = require("../models/CollectionCategory");
const NavigateMenu = require("../models/NavigateMenu");
const Popular = require("../models/Popular");

const colorsMock = require("../mock/colors.json");
const sizesMock = require("../mock/sizes.json");
const collectionsMock = require("../mock/collections.json");
const categoriesMock = require("../mock/categories.json");
const collectionCategoriesMock = require("../mock/collectionCategories.json");
const navigateMenusMock = require("../mock/navigateMenus.json");
const popularMock = require("../mock/populars.json");

module.exports = async () => {
  await createInitialEntity(Color, colorsMock);
  await createInitialEntity(Size, sizesMock);
  await createInitialEntity(Collection, collectionsMock);
  await createInitialEntity(Category, categoriesMock);
  await createInitialEntity(CollectionCategory, collectionCategoriesMock);
  await createInitialEntity(NavigateMenu, navigateMenusMock);
  await createInitialEntity(Popular, popularMock);
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  let responseData;
  let bufferData = [];

  Promise.all(
    data.map(async (item) => {
      try {
        const newItem = new Model(item);
        bufferData.push(newItem);
      } catch (error) {
        return error;
      }
    })
  );

  if (typeof bufferData[0]._id === "object") {
    const newData = Promise.all(
      bufferData.map(async (item) => {
        try {
          delete item._id;
          const newItem = new Model(item);

          await newItem.save();
          return newItem;
        } catch (error) {
          return error;
        }
      })
    );

    responseData = newData;
  } else if (typeof bufferData[0]._id === "string") {
    const newData = Promise.all(
      data.map(async (item) => {
        try {
          const newItem = new Model(item);
          await newItem.save();
          return newItem;
        } catch (error) {
          return error;
        }
      })
    );

    responseData = newData;
  }

  return responseData;
}
