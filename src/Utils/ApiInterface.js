import axios from "axios";

const ApiParser = (url, method, header, body) => {
  const config =
    header !== ""
      ? {
          headers: header,
        }
      : null;
  const data = body !== "" ? body : null;
  switch (method) {
    case "get":
      return axios.get(url, config);
    case "post":
      return axios.post(url, data, config);
    case "put":
      return axios.put(url, data, config);
    case "patch":
      return axios.patch(url, data, config);
    case "delete":
      return axios.delete(url, config);
    default:
      return axios;
  }
};

export { ApiParser };
