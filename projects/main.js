const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const port = process.env.PORT || 4000;
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use("/", express.static(path.join("./drag_and_drop_img")))

app.listen(port, ()=>console.log("server uploaded"))