import { countAmountElements } from "./countAmountElements";

export function incrementElementBasket(basket, id) {
  let resData = basket.map((b) =>
    b._id === id ? { ...b, quantity: b.quantity + 1 } : b
  );

  resData = countAmountElements(resData);
  return resData;
}
