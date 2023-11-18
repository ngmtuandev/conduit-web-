import axios from "axios";

const api = axios.create({
  baseURL: `https://conduit-apis.up.railway.app/api/`,
});

api.interceptors.request.use(
  function (config) {
    const tokenUser = localStorage.getItem("token_user");
    console.log(tokenUser);
    if (tokenUser) {
      config.headers.Authorization = `bearer ${tokenUser.trim()}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default api;
