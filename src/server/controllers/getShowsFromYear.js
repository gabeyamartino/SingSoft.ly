const axios = require("axios");

const getShowsFromYear = (req, res) => {
  let config = {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };
  axios
    .get(`http://phish.in/api/v1/years/${req.query.year}`, config)
    .then((data) => {
      res.json(data.data).end();
    })
    .catch((err) => {
      res.status(500);
      res.end();
      console.log("error: ", err);
    });
};

module.exports = getShowsFromYear;
