const express = require("express");
const Ajv = require("ajv").default;

const MaterialDao = require("../dao/materialDao");
const RecipeDao = require("../dao/recipeDao");

const { createRecipeSchema } = require("../schemas/recipeSchema");
const { getRecipeSchema } = require("../schemas/recipeSchema");

const router = express.Router();

//create post route for adding new recipe
router.post("/", async (req, res) => {
    // const ajv = new Ajv();
    // const valid = ajv.validate(createRecipeSchema, req.body);
    // if (valid) {
    const recipe = req.body;
    const newRecipelId = await RecipeDao.add(req.body);
    res.status(201).json({
        id: newRecipelId,
    });
    // } else {
    // res.status(400).send({
    // errorMessage: "validation of input failed",
    // params: req.body,
    // reason: ajv.errors,
    // });
    // }
});

//create get route for getting all recipes
router.get("/", async (req, res) => {
    const result = await RecipeDao.getAll();
    res.status(200).json(result);
});

//create get route for getting recipe by id
router.get("/:id", async (req, res) => {
    const result = await RecipeDao.getById(req.params.id);
    res.status(200).json(result);
});

module.exports = router;
