import _ from "lodash";

export function countAmountElements(basket) {
  const dataAmount = basket.map((b) => ({
    ...b,
    amount: _.round(Number(b.prices) * Number(b.quantity), 2),
  }));
  return dataAmount;
}
