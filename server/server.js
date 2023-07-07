const express = require("express");
const app = express();

const db = require("./dbConnection");
const tryConnect = require("./dbConnection");

const PORT = process.env.PORT || 5000;

tryConnect();

//create route to get data from database

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log(`app is listening on port ${3000}`);
});
