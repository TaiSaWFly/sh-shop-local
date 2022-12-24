import React from "react";
import style from "./productImage.module.scss";

const ProductImage = ({ imgUrl, otherImg }) => {
  return (
    <div className={style.product_image}>
      <img alt="pic" src={require(`/src/${imgUrl}`)} />
      <div className={style.product_image__other_images}>
        {otherImg.map((img, index) => (
          <div
            key={index}
            className={style.product_image__wrapper__other_images}>
            <img alt="pic" src={require(`/src/${img.imgUrl}`)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
