import React from "react";
import style from "./productTitle.module.scss";

const ProductTitle = ({ name, articleNumber }) => {
  return (
    <div className={style.product_title__wrapper}>
      <div className={style.product_title}>{name}</div>
      <div className={style.product_article_number}>
        Article number: {articleNumber}
      </div>
    </div>
  );
};

export default ProductTitle;
