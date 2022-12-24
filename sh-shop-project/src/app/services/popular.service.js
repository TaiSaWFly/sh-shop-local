import httpService from "./http.service";
const popularEndPoint = "popular/";

const popularService = {
  getList: async () => {
    const { data } = await httpService.get(popularEndPoint);
    return data;
  },
};

export default popularService;
