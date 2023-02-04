const axios = require("axios");

let people = 0;

const getAllYears = (req, res) => {
  people += 1;

  console.log(`${people} people have visited!`);
  let config = {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };
  axios
    .get("http://phish.in/api/v1/eras?include_show_counts=true", config)
    .then((data) => {
      res.json(data.data).end();
    })
    .catch((err) => {
      res.status(500);
      res.end();
      console.log("error: ", err);
    });
};

module.exports = getAllYears;
