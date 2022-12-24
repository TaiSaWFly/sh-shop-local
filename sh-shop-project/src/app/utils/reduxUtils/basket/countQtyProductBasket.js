export function countQtyProductBasket(basket, productId) {
  const filterdData = basket.filter((b) => b.productId === productId);
  const result =
    filterdData.length !== 0
      ? filterdData.reduce((acc, b) => acc + Number(b.quantity), 0)
      : 0;
  return result;
}
