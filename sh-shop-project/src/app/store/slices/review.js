import { createSlice } from "@reduxjs/toolkit";
import reviewService from "../../services/review.service";
import { generetaReviewError } from "../../utils/generetaReviewError";

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    reviewRequested: (state) => {
      state.isLoading = true;
    },
    reviewCreateRequested: (state) => {
      state.isLoading = true;
    },
    reviewReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    reviewCreateReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    reviewDeleteReceved: (state, action) => {
      state.entities = state.entities.filter((e) => e._id !== action.payload);
      state.isLoading = false;
    },
    reviewRecevedFalied: (state) => {
      state.isLoading = false;
    },
    reviewCreateRecevedFalied: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    reviewDeleteRecevedFalied: (state) => {
      state.isLoading = false;
    },
    reviewDeleteError: (state) => {
      state.error = null;
    },
  },
});

const { actions, reducer: reviewReducer } = reviewSlice;
const {
  reviewRequested,
  reviewCreateRequested,
  reviewReceved,
  reviewCreateReceved,
  reviewDeleteReceved,
  reviewRecevedFalied,
  reviewCreateRecevedFalied,
  reviewDeleteRecevedFalied,
  reviewDeleteError,
} = actions;

export const loadReviewByProductId = (productId) => async (dispatch) => {
  dispatch(reviewRequested());

  try {
    const { content } = await reviewService.getListByProductId(productId);
    dispatch(reviewReceved(content));
  } catch (error) {
    dispatch(reviewRecevedFalied());
  }
};

export const createReview =
  ({ data, productId }) =>
  async (dispatch) => {
    dispatch(reviewCreateRequested());
    dispatch(reviewDeleteError());
    const newReview = {
      ...data,
      productId: productId,
      created_at: Date.parse(new Date()).toString(),
    };

    try {
      const { status } = await reviewService.create(newReview);
      if (status === 201) {
        const { content } = await reviewService.getListByProductId(productId);
        dispatch(reviewCreateReceved(content));
      }
    } catch (error) {
      const { code, message } = error.response.data.error;
      if (code === 406) {
        const errorMessage = generetaReviewError(message);
        dispatch(reviewCreateRecevedFalied(errorMessage));
      }
    }
  };

export const deleteReview = (reviewId) => async (dispatch) => {
  try {
    await reviewService.delete(reviewId);
    dispatch(reviewDeleteReceved(reviewId));
  } catch (error) {
    dispatch(reviewDeleteRecevedFalied());
  }
};

export const deleteReviewError = () => (dispatch) => {
  dispatch(reviewDeleteError());
};

// Selectors
export const getReview = () => (state) => {
  let data;
  if (state.review.entities) {
    data = state.review.entities;
  }

  return data;
};
export const getReviewLoadingStatus = () => (state) => state.review.isLoading;
export const getReviewError = () => (state) => state.review.error;

export default reviewReducer;
