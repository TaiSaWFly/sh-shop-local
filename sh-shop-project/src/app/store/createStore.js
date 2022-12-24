import { combineReducers, configureStore } from "@reduxjs/toolkit";
import navigateMenuReducer from "./slices/navigateMenu";
import categoryReducer from "./slices/category";
import collectionCategoryReducer from "./slices/collectionCategory";
import productReducer from "./slices/product";
import popularReducer from "./slices/popular";
import colorReducer from "./slices/color";
import sizeReducer from "./slices/size";
import filterMemoryReducer from "./slices/filterMemory";
import basketReducer from "./slices/basket";
import favouriteReducer from "./slices/favourite";
import userReducer from "./slices/user";
import countryReducer from "./slices/country";
import reviewReducer from "./slices/review";

const rootReducer = combineReducers({
  navigateMenu: navigateMenuReducer,
  category: categoryReducer,
  collectionCategory: collectionCategoryReducer,
  product: productReducer,
  popular: popularReducer,
  color: colorReducer,
  size: sizeReducer,
  filterMemory: filterMemoryReducer,
  basket: basketReducer,
  favourite: favouriteReducer,
  user: userReducer,
  country: countryReducer,
  review: reviewReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
