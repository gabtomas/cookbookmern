const express = require("express");
const Ajv = require("ajv").default;

const MaterialDao = require("../dao/materialDao");
const { createIngredientSchema } = require("../schemas/materialSchema");

const router = express.Router();

router.get("/", async (req, res) => {
    const result = await MaterialDao.getAll();
    res.status(200).json(result);
});

//add new material with add method
router.post("/", async (req, res) => {
    const ajv = new Ajv();
    const valid = ajv.validate(createIngredientSchema, req.body);
    if (valid) {
        const material = req.body;
        const newMaterialId = await MaterialDao.add(material);
        res.status(201).json({
            id: newMaterialId,
        });
    } else {
        res.status(400).send({
            errorMessage: "validation of input failed",
            params: req.body,
            reason: ajv.errors,
        });
    }
});

module.exports = router;
