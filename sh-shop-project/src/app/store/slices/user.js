import { createSlice } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";
import localStorageService from "../../services/localStorage.service";
import orderHistoryService from "../../services/orderHistory.service";
import userService from "../../services/user.service";
import { generetaAuthError } from "../../utils/generateAuthError";
import history from "../../utils/history";

const initialState = localStorageService.getAccessToken()
  ? {
      entities: null,
      auth: { userId: localStorageService.getUserId() },
      orderHistory: null,
      isLoggedIn: true,
      error: null,
      isLoading: true,
      isLoadingHistory: true,
    }
  : {
      entities: null,
      auth: null,
      orderHistory: null,
      isLoggedIn: false,
      error: null,
      isLoading: true,
      isLoadingHistory: true,
    };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userRequested: (state) => {
      state.isLoading = true;
    },
    userReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    userUpdateSuccess: (state, action) => {
      state.isLoading = false;
      state.entities = action.payload;
    },
    userLoggedOut: (state) => {
      state.entities = null;
      state.auth = null;
      state.isLoggedIn = false;
      state.isLoading = true;
    },
    authRequested: (state) => {
      state.error = null;
    },
    authRequestSuccess: (state, action) => {
      state.auth = action.payload;
      state.error = null;
      state.isLoggedIn = true;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    errorClear: (state) => {
      state.error = null;
    },
    historyRequested: (state) => {
      state.isLoadingHistory = true;
    },
    historyReceved: (state, action) => {
      state.orderHistory = action.payload;
      state.isLoadingHistory = false;
    },
    historyRequestFailed: (state) => {
      state.isLoadingHistory = false;
    },
  },
});

const { actions, reducer: userReducer } = userSlice;
const {
  authRequested,
  authRequestSuccess,
  authRequestFailed,
  errorClear,
  userRequested,
  userReceved,
  userLoggedOut,
  userUpdateSuccess,
  historyRequested,
  historyReceved,
  historyRequestFailed,
} = actions;

export const logIn =
  ({ payload, redirect }) =>
  async (dispatch) => {
    dispatch(authRequested());
    try {
      const data = await authService.logIn(payload);
      localStorageService.setTokens(data);

      dispatch(authRequestSuccess({ userId: data.userId }));
      history.push(redirect);
    } catch (error) {
      const { code, message } = error.response.data.error;

      if (code === 400) {
        const errorMessage = generetaAuthError(message);
        dispatch(authRequestFailed(errorMessage));
      }
    }
  };

export const signUp = (payload) => async (dispatch) => {
  try {
    const data = await authService.register(payload);
    localStorageService.setTokens(data);

    dispatch(authRequestSuccess({ userId: data.userId }));
    history.push("/account");
  } catch (error) {
    const { code, message } = error.response.data.error;

    if (code === 400) {
      const errorMessage = generetaAuthError(message);
      dispatch(authRequestFailed(errorMessage));
    }
  }
};

export const logOut = () => async (dispatch) => {
  localStorageService.removeAuthData();
  dispatch(userLoggedOut());
  history.push("/");
};

export const updateUser =
  ({ payload, redirect }) =>
  async (dispatch, getState) => {
    const { auth } = getState().user;

    try {
      const { content } = await userService.updateUser(auth.userId, payload);
      dispatch(userUpdateSuccess(content));
      history.push(redirect);
    } catch (error) {}
  };

export const getUserById = (id) => async (dispatch) => {
  dispatch(userRequested());

  try {
    const { content } = await userService.getUser(id);
    dispatch(userReceved(content));
  } catch (error) {}
};

export const loadOrderHistoryUser = () => async (dispatch, getState) => {
  const { auth } = getState().user;
  dispatch(historyRequested());

  try {
    const { content } = await orderHistoryService.getHistoryListUser(
      auth.userId
    );
    dispatch(historyReceved(content));
  } catch (error) {
    dispatch(historyRequestFailed());
  }
};

export const clearAuthError = () => (dispatch) => {
  dispatch(errorClear());
};

// Selectors
export const getAuthUserId = () => (state) => state.user.auth?.userId;
export const getIsLoggedInStatus = () => (state) => state.user.isLoggedIn;
export const getUser = () => (state) => state.user.entities;
export const getIsLoadingStatusUser = () => (state) => state.user.isLoading;
export const getAuthErrors = () => (state) => state.user.error;
export const getOrderHistory = () => (state) => state.user.orderHistory;
export const getIsLoadingStatusHistory = () => (state) =>
  state.user.isLoadingHistory;

export default userReducer;
