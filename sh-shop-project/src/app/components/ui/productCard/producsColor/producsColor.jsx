import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./producsColor.module.scss";
import Loading from "../../../common/loadingComponent/loading";
import { getColorByIds } from "../../../../store/slices/color";

const ProducsColor = ({ colors, onChange }) => {
  const colorsArr = useSelector(getColorByIds(colors));
  const [currentColor, setCurrentColor] = useState();

  const handleChange = (id) => {
    setCurrentColor(id);
    onChange({ colors: [id] });
  };

  const setActiveClass = (id) => {
    return id === currentColor
      ? style.product_color___list_item__active
      : style.product_color___list_item;
  };

  return (
    <>
      {colors.length !== 0 && (
        <>
          {colorsArr ? (
            <div className={style.product_color}>
              {colorsArr && colorsArr.length !== 0 && (
                <ul className={style.product_color__list}>
                  <div className={style.product_color__title}>colors</div>
                  {colorsArr.map((c) => (
                    <li
                      key={c._id}
                      onClick={() => handleChange(c._id)}
                      className={setActiveClass(c._id)}>
                      <div
                        style={{
                          backgroundColor: `${c.hex}`,
                        }}></div>
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

export default ProducsColor;
