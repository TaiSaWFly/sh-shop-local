import React from "react";
import style from "./historyProducts.module.scss";

const HistoryProducts = ({ products }) => {
  return (
    <div className={style.history_products}>
      {products.map((p) => (
        <div key={p._id} className={style.product}>
          <div className={style.product_img__wrapper}>
            <div className={style.product_img}>
              <img alt="pic" src={require(`/src/${p.imgUrl}`)} />
            </div>
          </div>

          <div className={style.product_info__wrapper}>
            <div className={style.product_info}>
              <p>{p.name}</p>
              <span>Article: {p.articleNumber}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryProducts;
