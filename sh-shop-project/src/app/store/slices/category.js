import { createSlice } from "@reduxjs/toolkit";
import categoryService from "../../services/category.service";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    entities: null,
    isLoading: true,
  },
  reducers: {
    categoryRequested: (state) => {
      state.isLoading = true;
    },
    categoryReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    categoryRecevedFalied: (state) => {
      state.isLoading = false;
    },
  },
});

const { actions, reducer: categoryReducer } = categorySlice;
const { categoryRequested, categoryReceved, categoryRecevedFalied } = actions;

export const loadCategory = () => async (dispatch) => {
  dispatch(categoryRequested());
  try {
    const { content } = await categoryService.getList();
    dispatch(categoryReceved(content));
  } catch (error) {
    dispatch(categoryRecevedFalied());
  }
};

// Selectors

export const getCategoryByIds = (ids) => (state) => {
  if (state.category.entities) {
    const categoryArray = [];
    for (const id in ids) {
      for (const category in state.category.entities) {
        if (ids[id] === state.category.entities[category]._id) {
          categoryArray.push(state.category.entities[category]);
          break;
        }
      }
    }

    return categoryArray;
  }
};

export const getCategoryIdByCategoryPath = (path) => (state) => {
  let categoryId;
  if (state.category.entities) {
    categoryId = state.category.entities.find((e) => e.path === path)._id;
  }

  return categoryId;
};

export const getCategoryByPath = (path) => (state) => {
  let category;
  if (state.category.entities) {
    category = state.category.entities.find((e) => e.path === path);
  }

  return category;
};

export const getCategoryLoadingStatus = () => (state) =>
  state.category.isLoading;

export default categoryReducer;
