import httpService from "./http.service";
const colorEndPoint = "color/";

const colorService = {
  getList: async () => {
    const { data } = await httpService.get(colorEndPoint);
    return data;
  },
};

export default colorService;
