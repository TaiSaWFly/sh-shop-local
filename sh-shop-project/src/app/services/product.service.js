import httpService from "./http.service";
const productEndPoint = "product/";

const productService = {
  getProductLength: async () => {
    const { data } = await httpService.get(productEndPoint + "productLength");
    return data;
  },
  getByCollectionPath: async (collectionPath, reqData) => {
    const { data } = await httpService.post(
      productEndPoint + "by/" + collectionPath,
      reqData
    );

    return data;
  },
  getByCollectionPathAndCategoryPath: async (
    collectionPath,
    categoryPath,
    reqData
  ) => {
    const { data } = await httpService.post(
      productEndPoint + "by/" + collectionPath + "/" + categoryPath,
      reqData
    );

    return data;
  },
  getByIds: async (reqData) => {
    const { data } = await httpService.post(productEndPoint, reqData);
    return data;
  },
  getProductNewArrivals: async () => {
    const { data } = await httpService.get(productEndPoint + "newArrivals");
    return data;
  },
};
export default productService;
