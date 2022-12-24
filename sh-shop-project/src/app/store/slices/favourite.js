import { createSlice } from "@reduxjs/toolkit";
import { addAndRemoveFavourite } from "../../utils/reduxUtils/favourite/addAndRemoveFavourite";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    entities: null,
  },
  reducers: {
    favouriteAdding: (state, action) => {
      state.entities = action.payload;
    },
    favouriteRemove: (state, action) => {
      state.entities = action.payload;
    },
  },
});

const { actions, reducer: favouriteReducer } = favouriteSlice;
const { favouriteAdding, favouriteRemove } = actions;

export const toggleFavourite = (id) => (dispatch, getState) => {
  const { entities } = getState().favourite;

  if (entities !== null) {
    const data = addAndRemoveFavourite(entities, id);

    if (data.length > entities.length) {
      dispatch(favouriteAdding(data));
    } else {
      dispatch(favouriteRemove(data));
    }
  } else {
    dispatch(favouriteAdding([id]));
  }
};

// Selectors

export const getFavourite = () => (state) => {
  let data = [];
  if (state.favourite.entities) {
    data = state.favourite.entities;
  }
  return data;
};

export const getIsFavourite = (id) => (state) => {
  let isFavourite = false;
  if (state.favourite.entities) {
    const index = state.favourite.entities.findIndex((e) => e === id);
    isFavourite = index !== -1 ? true : false;
  }
  return isFavourite;
};

export const getFavouriteQuantity = () => (state) => {
  let qty = 0;
  if (state.favourite.entities) {
    qty = state.favourite.entities.length;
  }
  return qty;
};

export default favouriteReducer;
