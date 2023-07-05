const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(path.join(__dirname, "./../public/")));
app.use("/docs", express.static(path.join(__dirname, "./../docs/")));

app.listen(4000, () => console.log("server running on port 4000"));
module.exports = app;
