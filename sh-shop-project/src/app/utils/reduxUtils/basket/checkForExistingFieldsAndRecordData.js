import { nanoid } from "nanoid";
import _ from "lodash";
import { countAmountElements } from "./countAmountElements";

export function checkForExistingFieldsAndRecordData({ basket, content }) {
  let defaultData = { _id: nanoid(), quantity: 1, amount: content.prices };
  let basketClone = basket !== null ? [...basket] : [];
  const contentClone = { ...content };
  const contentCheckField = {
    productId: content.productId,
    sizes: content.sizes,
    colors: content.colors,
  };

  const findProduct = basketClone.filter(
    (b) => b.productId === content.productId
  );

  if (findProduct.length !== 0) {
    const transformProductFields = findProduct.map((p) => ({
      basketId: p._id,
      productId: p.productId,
      sizes: p.sizes,
      colors: p.colors,
    }));

    const equalData = transformProductFields.filter((p) =>
      _.isEqual(
        { productId: p.productId, sizes: p.sizes, colors: p.colors },
        contentCheckField
      )
    );

    const notEqualData = transformProductFields.filter(
      (p) =>
        !_.isEqual(
          { productId: p.productId, sizes: p.sizes, colors: p.colors },
          contentCheckField
        )
    );

    if (equalData.length !== 0) {
      equalData.forEach((e) => {
        basketClone = basketClone.map((b) =>
          e.basketId === b._id ? { ...b, quantity: b.quantity + 1 } : b
        );
      });
    }

    if (notEqualData.length !== 0) {
      const equalAndnotEqualData = [...notEqualData, ...equalData];

      const checkExistingFields = equalAndnotEqualData.filter((e) =>
        _.isEqual(
          { productId: e.productId, sizes: e.sizes, colors: e.colors },
          contentCheckField
        )
      );

      if (checkExistingFields.length === 0) {
        basketClone.push({ ...defaultData, ...contentClone });
      }
    }
  } else {
    basketClone.push({ ...defaultData, ...contentClone });
  }

  basketClone = countAmountElements(basketClone);

  return basketClone;
}
