import React from "react";
import { Link } from "react-router-dom";
import style from "./basketProductImage.module.scss";

const BasketProductImage = ({ id, imgUrl }) => {
  return (
    <Link to={`/product/${id}`} className={style.img_link}>
      <img alt="pic" src={require(`/src/${imgUrl}`)} />
    </Link>
  );
};

export default BasketProductImage;
