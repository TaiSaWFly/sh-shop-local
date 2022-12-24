import { createSlice } from "@reduxjs/toolkit";

const filterMemorySlice = createSlice({
  name: "filterMemory",
  initialState: {
    entities: null,
  },
  reducers: {
    filterMemorySave: (state, action) => {
      state.entities = action.payload;
    },
    filterMemoryRemove: (state) => {
      state.entities = null;
    },
  },
});

const { actions, reducer: filterMemoryReducer } = filterMemorySlice;
const { filterMemorySave, filterMemoryRemove } = actions;

export const saveFilterData = (data) => (dispatch) => {
  dispatch(filterMemorySave(data));
};
export const removeFilterData = () => (dispatch) => {
  dispatch(filterMemoryRemove());
};

// Selector
export const getFilterMemoryData = () => (state) => state.filterMemory.entities;

export default filterMemoryReducer;
