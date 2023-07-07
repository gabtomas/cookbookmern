//create mongoose connection

const mongoose = require("mongoose");
const dbPath =
    "mongodb+srv://tomgabriel55:LHjbbAXrPgel5B7X@cluster0.f7vhonp.mongodb.net/";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const mongo = mongoose.connect(dbPath, options);

//try to connect to the database

function tryConnect() {
    mongo
        .then(() => {
            console.log("connected");
        })
        .catch((err) => {
            console.log("err", err);
        });
}

module.exports = tryConnect;
