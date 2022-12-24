import { createSlice } from "@reduxjs/toolkit";
import navigateMenuService from "../../services/navigateMenu.service";

const navigateMenuSlice = createSlice({
  name: "navigateMenu",
  initialState: {
    entities: null,
    isLoading: true,
  },
  reducers: {
    navigateMenuRequested: (state) => {
      state.isLoading = true;
    },
    navigateMenuReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    navigateMenuRecevedFalied: (state) => {
      state.isLoading = false;
    },
  },
});

const { actions, reducer: navigateMenuReducer } = navigateMenuSlice;
const {
  navigateMenuRequested,
  navigateMenuReceved,
  navigateMenuRecevedFalied,
} = actions;

export const loadNavigateMenu = () => async (dispatch) => {
  dispatch(navigateMenuRequested());
  try {
    const { content } = await navigateMenuService.navigateMenus();
    dispatch(navigateMenuReceved(content));
  } catch (error) {
    dispatch(navigateMenuRecevedFalied());
  }
};

export const getNavigateMenu = () => (state) => state.navigateMenu.entities;
export const getNavigateMenuLoadingStatus = () => (state) =>
  state.navigateMenu.isLoading;

export default navigateMenuReducer;
