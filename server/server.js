const express = require("express");
const app = express();

const tryConnect = require("./dbConnection");

const PORT = process.env.PORT || 5000;

tryConnect();
/*middleware */
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log(`app is listening on port ${PORT}`);
});
