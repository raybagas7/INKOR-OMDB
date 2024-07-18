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
  get: async (url: string = "", params: ApiSearchParam, pageParam: number) => {
    params = { ...params, page: pageParam };
    return axios.get(url, { params }).then(responseBody);
  },
  post: (url: string = "", data?: object) =>
    axios.post(url, data).then(responseBody),
  put: (url: string = "", data?: object) =>
    axios.put(url, data).then(responseBody),
  delete: (url: string = "") => axios.delete(url).then(responseBody),
};

const Movie = {
  list: async (
    pageParam: number,
    query: ApiSearchParam,
  ): Promise<SearchMovies> => {
    try {
      const movies = await request.get("", query, pageParam);
      return movies;
    } catch (error) {
      throw new Error("Failed to fetch movies");
    }
  },
  listPage: async (
    pageParam: number,
    query: ApiSearchParam,
  ): Promise<{
    data: Movies[];
    currentPage: number;
    nextPage: number | null;
  }> => {
    try {
      const movies = await request.get("", query, pageParam);

      if (!movies) {
        throw new Error("Failed to fetch data from OMDB");
      }

      const data: Movies[] = movies.Search;

      return {
        data,
        currentPage: pageParam,
        nextPage: data.length > 0 ? pageParam + 1 : null,
      };
    } catch (error) {
      throw new Error("Failed to fetch data from OMDB");
    }
  },
};

const agent = {
  Movie,
};

export default agent;
