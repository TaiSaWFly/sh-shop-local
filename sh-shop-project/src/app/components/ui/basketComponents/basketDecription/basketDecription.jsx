import React from "react";
import style from "./basketDecription.module.scss";
import { Link } from "react-router-dom";

const BasketDecription = ({ id, name, article }) => {
  return (
    <div className={style.basket_description}>
      <Link
        to={`/product/${id}`}
        className={style.basket_description__title_link}>
        {name}
      </Link>

      <p className={style.basket_description__article}>
        <span>Article:</span> {article}
      </p>
    </div>
  );
};

export default BasketDecription;
