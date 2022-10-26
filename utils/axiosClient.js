import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.BASEURL,
});
axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    throw new Error(error);
  }
);

export default axiosClient;
