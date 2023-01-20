import axios from "axios";

const fetchYears = () => {
  return axios
    .get("http://localhost:3000/allYears")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default fetchYears;
