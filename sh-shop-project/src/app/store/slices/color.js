import { createSlice } from "@reduxjs/toolkit";
import colorService from "../../services/color.service";
import { transformDataForSelect } from "../../utils/transformDataForSelect";

const colorSlice = createSlice({
  name: "color",
  initialState: {
    entities: null,
    isLoading: true,
  },
  reducers: {
    colorRequested: (state) => {
      state.isLoading = true;
    },
    colorReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    colorRecevedFalied: (state) => {
      state.isLoading = false;
    },
  },
});

const { actions, reducer: colorReducer } = colorSlice;
const { colorRequested, colorReceved, colorRecevedFalied } = actions;

export const loadColors = () => async (dispatch) => {
  dispatch(colorRequested());

  try {
    const { content } = await colorService.getList();
    dispatch(colorReceved(content));
  } catch (error) {
    dispatch(colorRecevedFalied());
  }
};

// Selectors
export const getColorForSelect = () => (state) => {
  let data;
  if (state.color.entities) {
    data = transformDataForSelect(state.color.entities);
  }
  return data;
};

export const getColorByIds = (ids) => (state) => {
  let data = [];
  if (state.color.entities) {
    for (const i in ids) {
      for (const s in state.color.entities) {
        if (ids[i] === state.color.entities[s]._id) {
          data.push(state.color.entities[s]);
        }
      }
    }
  }
  return data;
};

export const getColorLoadingStatus = () => (state) => state.color.isLoading;

export default colorReducer;
