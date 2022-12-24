import React, { useEffect, useState } from "react";
import LoadingLogo from "../components/common/loadingComponent/loadingLogo";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryLoadingStatus,
  loadCategory,
} from "../store/slices/category";
import {
  getCollectionCategoryLoadingStatus,
  loadCollectionCategory,
} from "../store/slices/collectionCategory";
import {
  getNavigateMenuLoadingStatus,
  loadNavigateMenu,
} from "../store/slices/navigateMenu";
import { getPopularLoadingStatus, loadPopular } from "../store/slices/popular";
import {
  getProductLengthLoadingStatus,
  loadProductLength,
} from "../store/slices/product";
import { getColorLoadingStatus, loadColors } from "../store/slices/color";
import { getSizeLoadingStatus, loadSizes } from "../store/slices/size";
import { getCountryLoadingStatus, loadCountry } from "../store/slices/country";

const AppLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const isLoadingCategory = useSelector(getCategoryLoadingStatus());
  const isLoadingCollectionCategory = useSelector(
    getCollectionCategoryLoadingStatus()
  );
  const isLoadingNavigateMenu = useSelector(getNavigateMenuLoadingStatus());
  const isLoadingProductLength = useSelector(getProductLengthLoadingStatus());
  const isLoadingPopular = useSelector(getPopularLoadingStatus());

  // may be Update
  const isLoadingColor = useSelector(getColorLoadingStatus());
  const isLoadingSize = useSelector(getSizeLoadingStatus());
  const isLoadingCountry = useSelector(getCountryLoadingStatus());

  // init Redux Data
  useEffect(() => {
    setIsLoading(true);
    dispatch(loadCategory());
    dispatch(loadNavigateMenu());
    dispatch(loadCollectionCategory());
    dispatch(loadProductLength());
    dispatch(loadPopular());

    // may be Update
    dispatch(loadColors());
    dispatch(loadSizes());
    dispatch(loadCountry());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (
      !isLoadingCategory &&
      !isLoadingCollectionCategory &&
      !isLoadingNavigateMenu &&
      !isLoadingProductLength &&
      !isLoadingPopular &&
      !isLoadingColor &&
      !isLoadingSize &&
      !isLoadingCountry
    ) {
      setIsLoading(false);
    }
  }, [
    isLoadingCategory,
    isLoadingCollectionCategory,
    isLoadingNavigateMenu,
    isLoadingProductLength,
    isLoadingPopular,
    isLoadingColor,
    isLoadingSize,
    isLoadingCountry,
  ]);

  if (isLoading) return <LoadingLogo />;
  return children;
};

export default AppLoader;
