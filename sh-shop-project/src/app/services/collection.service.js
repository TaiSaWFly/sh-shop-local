import httpService from "./http.service";
const collectionEndPoint = "collection/";

const collectionService = {
  getCollectionByPath: async (path) => {
    const { data } = await httpService.get(collectionEndPoint + path);
    return data;
  },
};
export default collectionService;
