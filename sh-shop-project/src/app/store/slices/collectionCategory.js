import { createSlice } from "@reduxjs/toolkit";
import collectionCategoryService from "../../services/collectionCategory.service";

const collectionCategorySlice = createSlice({
  name: "collectionCategory",
  initialState: {
    entities: null,
    isLoading: true,
  },
  reducers: {
    collectionCategoryRequested: (state) => {
      state.isLoading = true;
    },
    collectionCategoryReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    collectionCategoryRecevedFalied: (state) => {
      state.isLoading = false;
    },
  },
});

const { actions, reducer: collectionCategoryReducer } = collectionCategorySlice;
const {
  collectionCategoryRequested,
  collectionCategoryReceved,
  collectionCategoryRecevedFalied,
} = actions;

export const loadCollectionCategory = () => async (dispatch) => {
  dispatch(collectionCategoryRequested());
  try {
    const { content } = await collectionCategoryService.get();
    dispatch(collectionCategoryReceved(content));
  } catch (error) {
    dispatch(collectionCategoryRecevedFalied());
  }
};

// Selectors
export const getCollectionCategoryByPath = (path) => (state) => {
  let foundCollectionCategory;

  if (state.collectionCategory.entities) {
    foundCollectionCategory = state.collectionCategory.entities.find(
      (e) => e.path === path
    );
  }

  return foundCollectionCategory;
};
export const getCollectionIdByPath = (path) => (state) => {
  let collectionId;
  if (state.collectionCategory.entities) {
    collectionId = state.collectionCategory.entities.find(
      (e) => e.path === path
    )._id;
  }

  return collectionId;
};
export const getCollectionCategory = () => (state) => {
  let data;
  if (state.collectionCategory.entities) {
    data = state.collectionCategory.entities;
  }

  return data;
};
export const getCollectionCategoryLoadingStatus = () => (state) =>
  state.collectionCategory.isLoading;

export default collectionCategoryReducer;
