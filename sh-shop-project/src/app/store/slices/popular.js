import { createSlice } from "@reduxjs/toolkit";
import popularService from "../../services/popular.service";

const popularSlice = createSlice({
  name: "popular",
  initialState: {
    entities: null,
    isLoading: true,
  },
  reducers: {
    popularRequested: (state) => {
      state.isLoading = true;
    },
    popularReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    popularRecevedFalied: (state) => {
      state.isLoading = false;
    },
  },
});

const { actions, reducer: popularReducer } = popularSlice;
const { popularRequested, popularReceved, popularRecevedFalied } = actions;

export const loadPopular = () => async (dispatch) => {
  dispatch(popularRequested());

  try {
    const { content } = await popularService.getList();
    dispatch(popularReceved(content));
  } catch (error) {
    dispatch(popularRecevedFalied());
  }
};

export const getPopular = () => (state) => state.popular.entities;
export const getPopularLoadingStatus = () => (state) => state.popular.isLoading;

export default popularReducer;
