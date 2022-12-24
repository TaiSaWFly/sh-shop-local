import { transformOptionlabel } from "./transformOptionlabel";

export const filterProductsByOption = (option, products) => {
  let filteredData = [...products];

  if (option.price !== "" && option.price !== null) {
    const values = transformOptionlabel(option.price.label);

    filteredData = filteredData.filter((p) => {
      let flag = false;

      if (p.prices) {
        if (p.prices.newPrice) {
          flag =
            Number(p.prices.newPrice) >= values[0] &&
            Number(p.prices.newPrice) <= values[1];
        } else {
          flag =
            Number(p.prices.price) >= values[0] &&
            Number(p.prices.price) <= values[1];
        }
      }

      return flag && p;
    });
  }

  if (option.size !== "" && option.size !== null) {
    filteredData = filteredData.filter((p) =>
      p.sizes.some((s) => s === option.size.value)
    );
  }

  if (option.color !== "" && option.color !== null) {
    filteredData = filteredData.filter((p) =>
      p.colors.some((c) => c === option.color.value)
    );
  }

  return filteredData;
};
