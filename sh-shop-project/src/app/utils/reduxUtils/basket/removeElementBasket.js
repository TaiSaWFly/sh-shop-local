import { countAmountElements } from "./countAmountElements";

export function removeElementBasket(basket, id) {
  let resData = basket.filter((b) => b._id !== id);
  resData = countAmountElements(resData);

  return resData;
}
