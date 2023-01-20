import axios from "axios";

const fetchShowsFromYear = (year) => {
  return axios
    .get("http://localhost:3000/showsFromYear", {
      params: {
        year: year,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log("error getting shows from year", err);
      return err;
    });
};

export default fetchShowsFromYear;
