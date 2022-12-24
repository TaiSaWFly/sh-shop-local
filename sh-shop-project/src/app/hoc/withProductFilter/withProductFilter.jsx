import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowMoreButton from "../../components/common/buttonComponent/showMoreButton";
import SelectField from "../../components/common/fieldCommonents/selectField/selectField";
import NoProductsCaregory from "../../components/ui/collectionComponents/noProductsCaregory/noProductsCaregory";
import { getColorForSelect } from "../../store/slices/color";
import {
  getFilterMemoryData,
  saveFilterData,
} from "../../store/slices/filterMemory";
import { getProductLengthByParamsIds } from "../../store/slices/product";
import { getSizeForSelect } from "../../store/slices/size";
import { filterProductsByOption } from "../../utils/filterProductsByOption";
import style from "./withProductFilter.module.scss";

const initialFilterState = {
  price: "",
  size: "",
  color: "",
};

const withProductFilter =
  (Component) =>
  ({ ...rest }) => {
    const {
      products,
      collectionPath,
      collection,
      category,
      limit,
      handleMoreProduct,
    } = rest;

    const dispatch = useDispatch();

    // Selectors
    const dataProductLength = useSelector(
      getProductLengthByParamsIds({
        collectionId: collection._id,
        categoryId: category?._id,
      })
    );
    const filterMemoryData = useSelector(getFilterMemoryData());
    const colorOptions = useSelector(getColorForSelect());
    const sizeOptions = useSelector(getSizeForSelect());
    const priceOptions = [
      { value: 1, label: "10-20" },
      { value: 2, label: "20-30" },
      { value: 3, label: "30-50" },
      { value: 4, label: "50-100" },
      { value: 5, label: "100 and more" },
    ];

    // check for COMMING SOON
    const checkProducts = products.filter((p) => p.prices);

    // States
    const [data, setData] = useState(
      filterMemoryData ? filterMemoryData : initialFilterState
    );
    const [filtedProducts, setFilterProducts] = useState(products);

    const handleChange = (target) => {
      setData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    };

    useEffect(() => {
      const filtedData = filterProductsByOption(data, products);
      setFilterProducts(filtedData);
    }, [products, data]);

    const handleMoreProductWithSaveFilterData = () => {
      handleMoreProduct();
      dispatch(saveFilterData(data));
    };

    return (
      <>
        {filtedProducts.length !== 0 ? (
          <>
            {checkProducts.length !== 0 && (
              <div className={style.product_filter}>
                <div className={style.filter_conteiner}>
                  <div className={style.filter_wrapper}>
                    <div className={style.filter}>
                      <SelectField
                        name="price"
                        options={priceOptions}
                        value={data.price}
                        placeholder="Price"
                        type="filter"
                        onChange={handleChange}
                      />
                    </div>
                    <div className={style.filter}>
                      <SelectField
                        name="size"
                        options={sizeOptions}
                        value={data.size}
                        placeholder="Size"
                        type="filter"
                        onChange={handleChange}
                      />
                    </div>
                    <div className={style.filter}>
                      <SelectField
                        name="color"
                        options={colorOptions}
                        value={data.color}
                        placeholder="Color"
                        type="filter"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <Component productsItems={filtedProducts} />

            {limit < dataProductLength && (
              <ShowMoreButton
                handleMoreProduct={handleMoreProductWithSaveFilterData}
              />
            )}
          </>
        ) : (
          <NoProductsCaregory
            {...{
              categoryId: category?._id,
              collectionPath,
            }}
          />
        )}
      </>
    );
  };

export default withProductFilter;
