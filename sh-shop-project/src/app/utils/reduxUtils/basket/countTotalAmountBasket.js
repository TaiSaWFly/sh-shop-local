import _ from "lodash";

export function countTotalAmountBasket(basket) {
  const result = basket.reduce((acc, b) => acc + Number(b.amount), 0);
  const roundResult = _.round(result, 2);

  return roundResult;
}
