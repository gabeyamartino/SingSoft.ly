const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const getAllYears = require("./controllers/getAllYears");
const getShowsFromYear = require("./controllers/getShowsFromYear");

const router = require("../lib/router");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);

app.use("/", express.static("src/dist"));
app.use(cors());

app.get("/allYears", getAllYears);

app.get("/showsFromYear", getShowsFromYear);

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
