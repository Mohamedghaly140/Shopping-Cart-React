import axios from "axios";

const instance = axios.create({
  baseURL: `https://yeshtery.herokuapp.com`,
  // baseURL: `http://localhost:5000`,
});

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
