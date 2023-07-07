const express = require("express");
const materialsRouter = require("./controllers/materials");

const PORT = process.env.PORT || 5000;

async function main() {
    // await createCollection();

    const app = express();

    app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/materials", materialsRouter);

    app.listen(PORT, () => {
        console.log(`app is listening on port ${PORT}`);
    });
}

main();
