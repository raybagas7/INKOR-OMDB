import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

axios.interceptors.request.use((config) => {
  if (!config.params) {
    config.params = {};
  }

  config.params["apikey"] = process.env.NEXT_PUBLIC_API_KEY;
  return config;
});

const responseBody = (response: AxiosResponse) => response.data;

const request = {
  get: (url: string = "", params?: object) =>
    axios.get(url, { params }).then(responseBody),
  post: (url: string = "", data?: object) =>
    axios.post(url, data).then(responseBody),
  put: (url: string = "", data?: object) =>
    axios.put(url, data).then(responseBody),
  delete: (url: string = "") => axios.delete(url).then(responseBody),
};

const Movie = {
  list: (query: object) => request.get("", query),
};

const agent = {
  Movie,
};

export default agent;
