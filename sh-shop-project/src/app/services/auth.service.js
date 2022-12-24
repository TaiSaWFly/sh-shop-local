import httpService from "./http.service";
const authEndPoint = "auth/";

const authService = {
  register: async (payload) => {
    const { data } = await httpService.post(authEndPoint + "signup", payload);
    return data;
  },
  logIn: async (payload) => {
    const { data } = await httpService.post(
      authEndPoint + "signinWithPassword",
      payload
    );
    return data;
  },
};
export default authService;
