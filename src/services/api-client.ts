import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "da27c3907641420588e85d4df1ac74b0",
  },
});
