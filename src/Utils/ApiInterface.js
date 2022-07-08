import axios from "axios";

const sanctumAuth = (sanctum) => {
  axios
    .get(sanctum.url, {
      withCredentials: sanctum.credCheck,
    })
    .then((res) => {
      console.log("Cookie Secured!");
    })
    .catch((err) => console.log("Failed to fetch cookie: " + err));
};

const ApiParser = (url, method, header, body, sanctum) => {
  const axiosConfig = {};

  if (header) {
    axiosConfig.headers = header;
  }

  const data = body !== "" ? body : null;
  if (sanctum.status) {
    axiosConfig.withCresidentials = sanctum.credCheck;
    sanctumAuth(sanctum);
  }

  switch (method) {
    case "get":
      return axios.get(url, axiosConfig);
    case "post":
      return axios.post(url, data, axiosConfig);
    case "put":
      return axios.put(url, data, axiosConfig);
    case "patch":
      return axios.patch(url, data, axiosConfig);
    case "delete":
      return axios.delete(url, axiosConfig);
    default:
      return axios;
  }
};

export { ApiParser, sanctumAuth };
