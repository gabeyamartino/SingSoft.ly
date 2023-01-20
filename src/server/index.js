const express = require("express");
const path = require("path");
require("dotenv").config();
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("dist/assets"));
app.use(cors());

app.get("/allYears", (req, res) => {
  console.log("fired on page load");
  let config = {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };
  axios
    .get("http://phish.in/api/v1/eras", config)
    .then((data) => {
      res.json(data.data).end();
    })
    .catch((err) => {
      res.status(500);
      res.end();
      console.log("error: ", err);
    });
});

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
