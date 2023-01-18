import React from "react";
import style from "./noProduct.module.scss";
import TitleComponent from "../../../common/titleComponent/titleComponent";
import RenderCollectionLinks from "../../collectionComponents/renderCollectionLinks/renderCollectionLinks";

const NoProduct = () => {
  return (
    <div className={style.no_products}>
      <div className={style.title}>
        <TitleComponent subtitle={"Product not found"} />
      </div>

      <div className={style.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ex
          quis neque deleniti pariatur sequi sunt fuga blanditiis, temporibus
          iste ea. Ex totam eum corporis in officiis quos sint vel.
        </p>
        {<RenderCollectionLinks />}
      </div>
    </div>
  );
};

export default NoProduct;
