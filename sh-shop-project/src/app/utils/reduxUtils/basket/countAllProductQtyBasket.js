export function countAllProductQtyBasket(basket) {
  const result = basket.reduce((acc, b) => acc + Number(b.quantity), 0);
  return result;
}
