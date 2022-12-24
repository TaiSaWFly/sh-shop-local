import { countAmountElements } from "./countAmountElements";

export function decrementElementBasket(basket, id) {
  let resData;
  const findElem = basket.find((b) => b._id === id);
  const unCount = findElem.quantity - 1;
  const data =
    unCount < 1
      ? basket.filter((b) => b._id !== id)
      : basket.map((b) =>
          b._id === id ? { ...b, quantity: b.quantity - 1 } : b
        );

  resData = countAmountElements(data);
  return resData;
}
