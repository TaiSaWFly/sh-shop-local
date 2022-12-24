import React from "react";
import style from "./dropdownPopularDescription.module.scss";
import ProductDescriptionShort from "../../../../common/productDescriptionShort/productDescriptionShort";
import { CSSTransition } from "react-transition-group";

const DropdownPopularDescription = ({ product, dropdown }) => {
  return (
    <CSSTransition
      in={dropdown}
      appear
      timeout={{
        enter: 100,
        exit: 400,
      }}
      classNames={{
        appear: style.dropdown,
        enter: style.show,
        enterDone: style.show__appearance,
        exit: style.hide__disappearance,
        exitDone: style.hide,
      }}
      mountOnEnter
      unmountOnExit>
      <div>
        <ProductDescriptionShort
          {...{
            id: product._id,
            name: product.name,
            prices: product.prices,
            newPrice: product.newPrice,
            description: product.description,
          }}
        />
      </div>
    </CSSTransition>
  );
};

export default DropdownPopularDescription;
