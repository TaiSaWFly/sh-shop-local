import httpService from "./http.service";
const reviewEndPoint = "review/";

const reviewService = {
  getListByProductId: async (productId) => {
    const { data } = await httpService.get(reviewEndPoint + productId);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.post(reviewEndPoint, payload);
    return data;
  },
  delete: async (id) => {
    const { data } = await httpService.delete(reviewEndPoint + id);
    return data;
  },
};

export default reviewService;
