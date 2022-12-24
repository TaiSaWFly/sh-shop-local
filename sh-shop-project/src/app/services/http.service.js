import axios from "axios";
import config from "../config.json";

const http = axios.create({
  baseURL: config.apiEndPoint,
});

http.interceptors.request.use(
  async function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (res) => res,
  function (error) {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedErrors) {
      const errorServerMessage = error.response.data.message;
      console.log(`Unexpected Error: ${errorServerMessage}`);
    }
    return Promise.reject(error);
  }
);

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  patch: http.patch,
  delete: http.delete,
};

export default httpService;
