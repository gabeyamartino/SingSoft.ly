import axios from "axios";

const fetchAllTours = () => {
  return axios
    .get("http://localhost:3000/allTours")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default fetchAllTours;
