const express = require("express");

const MaterialDao = require("../dao/materialDao");

const router = express.Router();

router.get("/", async (req, res) => {
    const result = await MaterialDao.getAll();
    res.status(200).json(result);
});

//add new material with add method
router.post("/", async (req, res) => {
    const result = await MaterialDao.add(req.body);
    res.status(200).json(result);
    // console.log("result", result);
});

module.exports = router;
