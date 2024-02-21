import axios from "axios";

const fetchShowsFromYear = (year) => {
  return axios
    .get("http://192.168.1.155:4000/showsFromYear", {
      params: {
        year: year,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("error getting shows from year", err);
      return err;
    });
};

export default fetchShowsFromYear;
