import httpService from "./http.service";
const userEndPoint = "user/";

const userService = {
  getUser: async (id) => {
    const { data } = await httpService.get(userEndPoint + id);
    return data;
  },
  updateUser: async (id, payload) => {
    const { data } = await httpService.patch(userEndPoint + id, payload);
    return data;
  },
};
export default userService;
