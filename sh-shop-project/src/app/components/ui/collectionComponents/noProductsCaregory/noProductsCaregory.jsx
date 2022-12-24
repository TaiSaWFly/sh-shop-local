import React from "react";
import style from "./noProductsCaregory.module.scss";
import TitleComponent from "../../../common/titleComponent/titleComponent";
import RenderCategoryLinks from "../renderCategoryLinks/renderCategoryLinks";

const NoProductsCaregory = ({ categoryId, collectionPath }) => {
  return (
    <div className={style.no_products_caregory}>
      <div className={style.title}>
        <TitleComponent
          subtitle={`No products in this ${
            categoryId ? "category" : "collection"
          } `}
        />
      </div>

      <div className={style.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ex
          quis neque deleniti pariatur sequi sunt fuga blanditiis, temporibus
          iste ea. Ex totam eum corporis in officiis quos sint vel.
        </p>
        <div>
          Please try to find something in this category{" "}
          {<RenderCategoryLinks {...{ categoryId, collectionPath }} />}
        </div>
      </div>
    </div>
  );
};

export default NoProductsCaregory;
