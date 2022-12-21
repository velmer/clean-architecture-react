import axios from "axios";

const goRest = axios.create({
  baseURL: "https://gorest.co.in/public/v2",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GOREST_TOKEN}`,
  },
});

export default goRest;
