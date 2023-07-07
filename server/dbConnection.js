//create mongoose connection
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//try to connect to the database

function tryConnect() {
    dotenv.config();
    const options = { useNewUrlParser: true, useUnifiedTopology: true };

    const mongo = mongoose.connect(process.env.DB_URL_CONNECT, options);

    mongo
        .then(() => {
            console.log("connected");
        })
        .catch((err) => {
            console.log("err", err);
        });
}

module.exports = tryConnect;
