import { createSlice } from "@reduxjs/toolkit";
import { transformDataForSelect } from "../../utils/transformDataForSelect";
const countriesArray = require("country-data-list").countries;

const countrySlice = createSlice({
  name: "country",
  initialState: {
    entities: null,
    isLoading: true,
  },
  reducers: {
    countryRequested: (state) => {
      state.isLoading = true;
    },
    countryReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
  },
});

const { actions, reducer: countryReducer } = countrySlice;
const { countryRequested, countryReceved } = actions;

export const loadCountry = () => (dispatch) => {
  dispatch(countryRequested());

  const countries = countriesArray.all.map((c, i) => ({
    _id: i + c.alpha2,
    name: c.name,
  }));

  dispatch(countryReceved(countries));
};

// Selectors
export const getCountryForSelect = () => (state) => {
  let data;
  if (state.country.entities) {
    data = transformDataForSelect(state.country.entities);
  }
  return data;
};
export const getCountryById = (id) => (state) => {
  let data = [];
  if (state.country.entities) {
    data = state.country.entities.find((c) => c._id === id);
  }
  return data;
};
export const getCountryLoadingStatus = () => (state) => state.country.isLoading;

export default countryReducer;
