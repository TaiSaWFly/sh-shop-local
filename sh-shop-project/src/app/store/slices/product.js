import { createSlice } from "@reduxjs/toolkit";
import productService from "../../services/product.service";
import { definedLengthArray } from "../../utils/definedLengthArray";
import { checkDouble } from "../../utils/reduxUtils/product/checkDouble";
import { findExistingIds } from "../../utils/reduxUtils/product/findExistingIds";
import { findProductByCollectionId } from "../../utils/reduxUtils/product/findProductByCollectionId";
import { findProductByCollectionIdAndCategoryId } from "../../utils/reduxUtils/product/findProductByCollectionIdAndCategoryId";
import { findProductByIds } from "../../utils/reduxUtils/product/findProductByIds";
import { getCurrentProductslength } from "../../utils/reduxUtils/product/getCurrentProductslength";
import { repeatedRequest } from "../../utils/reduxUtils/product/repeatedRequest";

const productSlice = createSlice({
  name: "product",
  initialState: {
    entities: null,
    entitiesLength: null,
    isLoading: true,
    isLoadingLength: true,
  },
  reducers: {
    productRequested: (state) => {
      state.isLoading = true;
    },
    productReceved: (state, action) => {
      if (state.entities === null) {
        state.entities = action.payload;
      } else {
        state.entities = [...checkDouble(state.entities, action.payload)];
      }
    },
    productLengthRequested: (state) => {
      state.isLoadingLength = true;
    },
    productLengthReceved: (state, action) => {
      state.entitiesLength = action.payload;
      state.isLoadingLength = false;
    },
    productLoaded: (state) => {
      state.isLoading = false;
    },
    productRecevedFalied: (state) => {
      state.isLoading = false;
    },
    productLengthFalied: (state) => {
      state.isLoadingLength = false;
    },
  },
});

const { actions, reducer: productReducer } = productSlice;
const {
  productRequested,
  productReceved,
  productLoaded,
  productRecevedFalied,
  productLengthRequested,
  productLengthReceved,
  productLengthFalied,
} = actions;

export const loadProductByCollectionPathAndCategoryPath =
  (collectionPath, categoryPath, collectionId, categoryId, definedLength) =>
  async (dispatch, getState) => {
    dispatch(productRequested());

    const { entities, entitiesLength } = getState().product;

    if (entities !== null) {
      const tryRequest = repeatedRequest({
        collectionId: collectionId,
        categoryId: categoryId,
        products: entities,
        productslength: entitiesLength,
        definedLength: definedLength,
      });

      if (tryRequest) {
        const currentEntitiesIds = findExistingIds({
          products: entities,
          collectionId: collectionId,
          categoryId: categoryId,
        });

        try {
          const { content } =
            await productService.getByCollectionPathAndCategoryPath(
              collectionPath,
              categoryPath,
              { limit: definedLength, withOutIds: currentEntitiesIds }
            );

          dispatch(productReceved(content));
        } catch (error) {
          dispatch(productRecevedFalied());
        }
      }
      dispatch(productLoaded());
    } else {
      try {
        const { content } =
          await productService.getByCollectionPathAndCategoryPath(
            collectionPath,
            categoryPath,
            { limit: definedLength }
          );

        dispatch(productReceved(content));
        dispatch(productLoaded());
      } catch (error) {
        dispatch(productRecevedFalied());
      }
    }
  };

export const loadProductByCollectionPath =
  (collectionPath, collectionId, definedLength) =>
  async (dispatch, getState) => {
    dispatch(productRequested());

    const { entities, entitiesLength } = getState().product;

    if (entities !== null) {
      const tryRequest = repeatedRequest({
        collectionId: collectionId,
        products: entities,
        productslength: entitiesLength,
        definedLength: definedLength,
      });

      if (tryRequest) {
        const currentEntitiesIds = findExistingIds({
          products: entities,
          collectionId: collectionId,
        });

        try {
          const { content } = await productService.getByCollectionPath(
            collectionPath,
            { limit: definedLength, withOutIds: currentEntitiesIds }
          );

          dispatch(productReceved(content));
        } catch (error) {
          dispatch(productRecevedFalied());
        }
      }

      dispatch(productLoaded());
    } else {
      try {
        const { content } = await productService.getByCollectionPath(
          collectionPath,
          { limit: definedLength }
        );

        dispatch(productReceved(content));
        dispatch(productLoaded());
      } catch (error) {
        dispatch(productRecevedFalied());
      }
    }
  };

export const loadProductByIds = (ids) => async (dispatch, getState) => {
  dispatch(productRequested());

  const { entities } = getState().product;

  if (entities !== null) {
    const dataIds = findExistingIds({ products: entities, reqData: ids });
    const tryRequest = dataIds.length !== 0;
    if (tryRequest) {
      try {
        const { content } = await productService.getByIds(dataIds);

        dispatch(productReceved(content));
      } catch (error) {
        dispatch(productRecevedFalied());
      }
    }

    dispatch(productLoaded());
  } else {
    try {
      const { content } = await productService.getByIds(ids);

      dispatch(productReceved(content));
      dispatch(productLoaded());
    } catch (error) {
      dispatch(productRecevedFalied());
    }
  }
};

export const loadProductLength = () => async (dispatch) => {
  dispatch(productLengthRequested());
  try {
    const { content } = await productService.getProductLength();
    dispatch(productLengthReceved(content));
  } catch (error) {
    dispatch(productLengthFalied());
  }
};

// Selectors
export const getProductByCollectionIdAndCategoryId =
  (collectionId, categoryId, definedLength) => (state) => {
    let data;

    if (state.product.entities) {
      const products = findProductByCollectionIdAndCategoryId(
        state.product.entities,
        collectionId,
        categoryId
      );
      data = definedLengthArray(products, definedLength);
    }

    return data;
  };

export const getProductByCollectionId =
  (collectionId, definedLength) => (state) => {
    let data;
    if (state.product.entities) {
      const products = findProductByCollectionId(
        state.product.entities,
        collectionId
      );
      data = definedLengthArray(products, definedLength);
    }
    return data;
  };

export const getProductByIds = (ids) => (state) => {
  let data;

  if (state.product.entities) {
    data = findProductByIds(state.product.entities, ids);
  }
  return data;
};

export const getProductLengthByParamsIds =
  ({ collectionId, categoryId }) =>
  (state) => {
    let data;
    if (state.product.entitiesLength) {
      data = getCurrentProductslength({
        entitiesLength: state.product.entitiesLength,
        collectionId: collectionId,
        categoryId: categoryId,
      });
    }
    return data;
  };
export const getProductLength = () => (state) => state.product.entitiesLength;

export const getProductLoadingStatus = () => (state) => state.product.isLoading;
export const getProductLengthLoadingStatus = () => (state) =>
  state.product.isLoadingLength;

export default productReducer;
