const express = require("express");
const path = require("path");

//config
const config = require("./config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(path.join(__dirname, "./../public/")));
app.use("/docs", express.static(path.join(__dirname, "./../docs/")));

app.listen(config.PORT, () => console.log(`server running on port ${config.PORT}`));
module.exports = app;
