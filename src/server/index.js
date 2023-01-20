const express = require("express");
const path = require("path");
require("dotenv").config();
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("dist/assets"));

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
