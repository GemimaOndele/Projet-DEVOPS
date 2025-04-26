import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",  // doit correspondre au port exposé
});

export default instance;
