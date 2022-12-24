import httpService from "./http.service";
const collectionCategoryEndPoint = "collectionCategory/";

const collectionCategoryService = {
  get: async () => {
    const { data } = await httpService.get(collectionCategoryEndPoint);
    return data;
  },
};

export default collectionCategoryService;
