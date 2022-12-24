import { randomNumber } from "./randomNumber";

export function generateOrderNumber() {
  let order = "#";
  for (let i = 0; i < 5; i++) {
    let number = randomNumber(0, 9);
    order += number;
  }

  return order;
}
