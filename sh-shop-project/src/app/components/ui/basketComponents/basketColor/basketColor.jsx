import React from "react";
import { useSelector } from "react-redux";
import { getColorByIds } from "../../../../store/slices/color";
import style from "./basketColor.module.scss";

const BasketColor = ({ colors }) => {
  const colorsArray = useSelector(getColorByIds(colors));

  return (
    <>
      {colorsArray.length !== 0 ? (
        <>
          {colorsArray.map((c) => (
            <div key={c._id} className={style.basket_color}>
              {c.name}
            </div>
          ))}
        </>
      ) : (
        <>no color selected</>
      )}
    </>
  );
};

export default BasketColor;
