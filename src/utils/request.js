import axios from "axios";

const request = axios.create({
  baseURL: "",
  timeout: 60 * 1000
});

request.interceptors.request.use(
  (config) => {
    if (config.url != "login") {
      config.headers["Authorization"] = "Fake Token";
    }
    return config;
  },
  (error) => {
    console.log("request error:>>", error);
    ElMessage.error(JSON.stringify(error));
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    // 接口请求成功走这里
    const { data } = response;
    // 根据项目处理
    // ...
    return data;
  },
  (error) => {
    // 浏览器报错 401,404,500 等
    console.log("response error:>>", error);
    if (error.message) {
      ElMessage.error(JSON.stringify(error.message));
    }

    return Promise.reject(error);
  }
);

export default request;
