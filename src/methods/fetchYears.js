import axios from "axios";

const fetchYears = () => {
  return axios
    .get("http://192.168.1.155:4000/allYears")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default fetchYears;
