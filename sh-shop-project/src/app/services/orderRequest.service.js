import httpService from "./http.service";
const orderRequestEndPoint = "orderRequest/";

const orderRequestService = {
  create: async (payload) => {
    const { data } = await httpService.post(orderRequestEndPoint, payload);
    return data;
  },
};

export default orderRequestService;
