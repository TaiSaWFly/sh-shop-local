import React, { useState } from "react";
import style from "./productSize.module.scss";
import Loading from "../../../common/loadingComponent/loading";
import { useSelector } from "react-redux";
import { getSizeByIds } from "../../../../store/slices/size";

const ProductSize = ({ sizes, onChange }) => {
  const sizesArray = useSelector(getSizeByIds(sizes));
  const [currentSize, setCurrentSize] = useState();

  const handleChange = (id) => {
    setCurrentSize(id);
    onChange({ sizes: [id] });
  };

  const setActiveClass = (id) => {
    return id === currentSize
      ? style.product_size___list_item__active
      : style.product_size___list_item;
  };

  return (
    <>
      {sizes.length !== 0 && (
        <>
          {sizesArray ? (
            <div className={style.product_size}>
              {sizesArray && sizesArray.length !== 0 && (
                <ul className={style.product_size__list}>
                  <div className={style.product_size__title}>size</div>
                  {sizesArray.map((s) => (
                    <li
                      key={s._id}
                      onClick={() => handleChange(s._id)}
                      className={setActiveClass(s._id)}>
                      <span>{s.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <Loading />
          )}
        </>
      )}
    </>
  );
};

export default ProductSize;
