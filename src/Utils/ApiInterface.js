import axios from "axios";

let client = axios.create();

const sanctumAuth = (sanctum) => {
  client = axios.create({
    withCredentials: sanctum.credCheck,
  });
  return client.get(sanctum.url);
};

const ApiParser = async (url, method, header, body, sanctum) => {
  const axiosConfig = {};

  if (header) {
    axiosConfig.headers = header;
  }

  const data = body !== "" ? body : null;
  if (sanctum.status) {
    try {
      await sanctumAuth(sanctum);
    } catch (err) {
      console.log("Sanctum auth failed");
    }
  }

  switch (method) {
    case "get":
      return client.get(url, axiosConfig);
    case "post":
      return client.post(url, data, axiosConfig);
    case "put":
      return client.put(url, data, axiosConfig);
    case "patch":
      return client.patch(url, data, axiosConfig);
    case "delete":
      return client.delete(url, axiosConfig);
    default:
      return client;
  }
};

export { ApiParser, sanctumAuth };
