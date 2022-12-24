import httpService from "./http.service";
const sizeEndPoint = "size/";

const sizeService = {
  getList: async () => {
    const { data } = await httpService.get(sizeEndPoint);
    return data;
  },
};

export default sizeService;
