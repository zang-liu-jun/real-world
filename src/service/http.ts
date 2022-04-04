import axios from "axios";

export default axios.create({
  baseURL: "http://42.192.180.126:9000",
  timeout: 5000
})
