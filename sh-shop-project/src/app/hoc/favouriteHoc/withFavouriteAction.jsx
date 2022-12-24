import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsFavourite, toggleFavourite } from "../../store/slices/favourite";

const withFavouriteAction =
  (Component) =>
  ({ ...rest }) => {
    const { productId } = rest;
    const dispatch = useDispatch();

    const isFavourite = useSelector(getIsFavourite(productId));

    const handleToggleFavourite = () => {
      dispatch(toggleFavourite(productId));
    };

    return <Component {...{ isFavourite, handleToggleFavourite }} />;
  };

export default withFavouriteAction;
