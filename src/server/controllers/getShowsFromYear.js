const axios = require("axios");

const getShowsFromYear = (req, res) => {
  // console.log("Fired when I clicked on a year");
  console.log("ON LINE 5", req.query);
  let config = {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };
  axios
    .get(`http://phish.in/api/v1/years/${req.query.year}`, config)
    .then((data) => {
      // console.log(data);
      res.json(data.data).end();
    })
    .catch((err) => {
      res.status(500);
      res.end();
      // console.log("error: ", err);
    });
};

module.exports = getShowsFromYear;
