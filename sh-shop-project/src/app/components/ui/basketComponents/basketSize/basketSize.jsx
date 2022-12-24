import React from "react";
import { useSelector } from "react-redux";
import { getSizeByIds } from "../../../../store/slices/size";

const BasketSize = ({ sizes }) => {
  const sizesArray = useSelector(getSizeByIds(sizes));

  return (
    <>
      {sizesArray.length !== 0 ? (
        <>
          {sizesArray.map((s) => (
            <div key={s._id}>{s.name}</div>
          ))}
        </>
      ) : (
        <>no sizes selected</>
      )}
    </>
  );
};

export default BasketSize;
