import httpService from "./http.service";
const categoryEndPoint = "category/";

const categoryService = {
  getList: async () => {
    const { data } = await httpService.get(categoryEndPoint);
    return data;
  },
  getDataByIds: async (payload) => {
    const { data } = await httpService.post(categoryEndPoint + "ids", payload);
    return data;
  },
};
export default categoryService;
