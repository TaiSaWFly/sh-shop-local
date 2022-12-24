import { createSlice } from "@reduxjs/toolkit";
import orderHistoryService from "../../services/orderHistory.service";
import orderRequestService from "../../services/orderRequest.service";
import { generateOrderNumber } from "../../utils/generateOrderNumber";
import { checkForExistingFieldsAndRecordData } from "../../utils/reduxUtils/basket/checkForExistingFieldsAndRecordData";
import { countAllProductQtyBasket } from "../../utils/reduxUtils/basket/countAllProductQtyBasket";
import { countQtyProductBasket } from "../../utils/reduxUtils/basket/countQtyProductBasket";
import { countTotalAmountBasket } from "../../utils/reduxUtils/basket/countTotalAmountBasket";
import { decrementElementBasket } from "../../utils/reduxUtils/basket/decrementElementBasket";
import { incrementElementBasket } from "../../utils/reduxUtils/basket/incrementElementBasket";
import { removeElementBasket } from "../../utils/reduxUtils/basket/removeElementBasket";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    entities: null,
    totalAmount: 0,
    orderStatus: null,
    isLoadingOrderStatus: null,
  },
  reducers: {
    basketRequested: (state) => {
      state.isLoading = true;
    },
    basketAdding: (state, action) => {
      state.entities = action.payload;
    },
    basketIncrement: (state, action) => {
      state.entities = action.payload;
    },
    removeFromBasket: (state, action) => {
      state.entities = action.payload;
    },
    basketDecrement: (state, action) => {
      state.entities = action.payload;
    },
    basketTotalAmountUpdate: (state, action) => {
      state.totalAmount = action.payload;
    },
    basketRecevedFalied: (state) => {
      state.isLoading = false;
    },
    orderRequest: (state) => {
      state.isLoadingOrderStatus = true;
    },
    orderRequestSuccess: (state) => {
      state.entities = null;
      state.totalAmount = 0;
      state.orderStatus = true;
      state.isLoadingOrderStatus = false;
    },
    orderRequestFalied: (state) => {
      state.orderStatus = false;
      state.isLoadingOrderStatus = false;
    },
    orderStatusDefault: (state) => {
      state.orderStatus = null;
      state.isLoadingOrderStatus = null;
    },
  },
});

const { actions, reducer: basketReducer } = basketSlice;
const {
  basketAdding,
  basketIncrement,
  removeFromBasket,
  basketDecrement,
  basketTotalAmountUpdate,
  orderRequest,
  orderRequestSuccess,
  orderRequestFalied,
  orderStatusDefault,
} = actions;

export const requestOrder = (data) => async (dispatch, getState) => {
  dispatch(orderRequest());

  const { entities, totalAmount } = getState().basket;

  const orderNumber = generateOrderNumber();
  const orderDate = Date.parse(new Date()).toString();

  const historyData = {
    userId: data.userId,
    order: orderNumber,
    orderDate: orderDate,
    products: entities,
    status: "open",
    shipDate: "",
    total: `${totalAmount}`,
  };

  const requestOrderData = {
    ...data,
    order: orderNumber,
    orderDate: orderDate,
  };

  try {
    await orderHistoryService.create(historyData);
    await orderRequestService.create(requestOrderData);
    dispatch(orderRequestSuccess());
  } catch (error) {
    dispatch(orderRequestFalied());
  }
};

export const clearOrderStatus = () => (dispatch) => {
  dispatch(orderStatusDefault());
};

export const addProductToBasket = (data, id) => (dispatch, getState) => {
  const { entities } = getState().basket;
  const resPayload = checkForExistingFieldsAndRecordData({
    basket: entities,
    content: data,
    id: id,
  });
  const totalAmount = countTotalAmountBasket(resPayload);

  dispatch(basketAdding(resPayload));
  dispatch(basketTotalAmountUpdate(totalAmount));
};

export const incrementBasketElement = (id) => (dispatch, getState) => {
  const { entities } = getState().basket;
  const resPayload = incrementElementBasket(entities, id);
  const totalAmount = countTotalAmountBasket(resPayload);

  dispatch(basketIncrement(resPayload));
  dispatch(basketTotalAmountUpdate(totalAmount));
};

export const deleteProductFromBasket = (id) => (dispatch, getState) => {
  const { entities } = getState().basket;
  const resPayload = removeElementBasket(entities, id);
  const totalAmount = countTotalAmountBasket(resPayload);

  dispatch(removeFromBasket(resPayload));
  dispatch(basketTotalAmountUpdate(totalAmount));
};

export const decrementBasketElement = (id) => (dispatch, getState) => {
  const { entities } = getState().basket;
  const resPayload = decrementElementBasket(entities, id);
  const totalAmount = countTotalAmountBasket(resPayload);

  dispatch(basketDecrement(resPayload));
  dispatch(basketTotalAmountUpdate(totalAmount));
};

// Selectors
export const getBasketData = () => (state) => state.basket.entities;
export const getIsExistingProductInBasket = (id) => (state) => {
  let flag = false;
  if (state.basket.entities) {
    const index = state.basket.entities.findIndex((b) => b.productId === id);
    flag = index !== -1 ? true : false;
  }

  return flag;
};

export const getAllProductsQtyBasket = () => (state) => {
  let data = 0;
  if (state.basket.entities) {
    data = countAllProductQtyBasket(state.basket.entities);
  }

  return data;
};

export const getQtyProductsBasket = (productId) => (state) => {
  let data = 0;
  if (state.basket.entities) {
    data = countQtyProductBasket(state.basket.entities, productId);
  }

  return data;
};

export const getSubtotalBasketAmount = () => (state) =>
  state.basket.totalAmount;

export const getOrderStatus = () => (state) => state.basket.orderStatus;
export const getLoadingOrderStatus = () => (state) =>
  state.basket.isLoadingOrderStatus;

export default basketReducer;
