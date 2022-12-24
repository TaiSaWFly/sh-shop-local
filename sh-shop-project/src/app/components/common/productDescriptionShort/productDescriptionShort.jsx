import React from "react";
import { formatTextByQuantitySentences } from "../../../utils/formatTextByQuantitySentences";
import RenderPrice from "../priceComponent/renderPrice/renderPrice";
import ProductListActions from "../productListActions/productListActions";
import style from "./productDescriptionShort.module.scss";

const ProductDescriptionShort = ({
  id,
  name,
  prices,
  description,
  titleSize,
  textSize,
  QTYSentences,
}) => {
  const fontSizeTitle = {
    fontSize: `${titleSize}`,
  };

  const fontSizeText = {
    fontSize: `${textSize}`,
  };

  return (
    <div className={style.description}>
      <div
        style={titleSize ? fontSizeTitle : null}
        className={style.description_title}>
        {name}
      </div>

      <RenderPrice {...{ prices }} />

      <div
        style={textSize ? fontSizeText : null}
        className={style.product_description}>
        {QTYSentences
          ? formatTextByQuantitySentences(description, QTYSentences)
          : formatTextByQuantitySentences(description, 3)}
      </div>

      <div className={style.product_description__actions}>
        <ProductListActions productId={id} {...{ prices }} />
      </div>
    </div>
  );
};

export default ProductDescriptionShort;
