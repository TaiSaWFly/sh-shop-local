import httpService from "./http.service";
const orderHistoryEndPoint = "orderHistory/";

const orderHistoryService = {
  create: async (payload) => {
    const { data } = await httpService.post(orderHistoryEndPoint, payload);
    return data;
  },
  getHistoryListUser: async (userId) => {
    const { data } = await httpService.get(orderHistoryEndPoint + userId);
    return data;
  },
};

export default orderHistoryService;
