import { createSlice } from "@reduxjs/toolkit";
import sizeService from "../../services/size.service";
import { transformDataForSelect } from "../../utils/transformDataForSelect";

const sizeSlice = createSlice({
  name: "size",
  initialState: {
    entities: null,
    isLoading: true,
  },
  reducers: {
    sizeRequested: (state) => {
      state.isLoading = true;
    },
    sizeReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    sizeRecevedFalied: (state) => {
      state.isLoading = false;
    },
  },
});

const { actions, reducer: sizeReducer } = sizeSlice;
const { sizeRequested, sizeReceved, sizeRecevedFalied } = actions;

export const loadSizes = () => async (dispatch) => {
  dispatch(sizeRequested());

  try {
    const { content } = await sizeService.getList();
    dispatch(sizeReceved(content));
  } catch (error) {
    dispatch(sizeRecevedFalied());
  }
};

// Selectors
export const getSizeForSelect = () => (state) => {
  let data;
  if (state.size.entities) {
    data = transformDataForSelect(state.size.entities);
  }
  return data;
};
export const getSizeByIds = (ids) => (state) => {
  let data = [];
  if (state.size.entities) {
    for (const i in ids) {
      for (const s in state.size.entities) {
        if (ids[i] === state.size.entities[s]._id) {
          data.push(state.size.entities[s]);
        }
      }
    }
  }
  return data;
};
export const getSizeLoadingStatus = () => (state) => state.size.isLoading;

export default sizeReducer;
