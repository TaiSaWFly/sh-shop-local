import httpService from "./http.service";
const navigateMenuEndPoint = "navigateMenu/";

const navigateMenuService = {
  navigateMenus: async () => {
    const { data } = await httpService.get(navigateMenuEndPoint);
    return data;
  },
};

export default navigateMenuService;
