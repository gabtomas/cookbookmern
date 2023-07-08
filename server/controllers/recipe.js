const express = require("express");

const MaterialDao = require("../dao/materialDao");
const RecipeDao = require("../dao/recipeDao");

const router = express.Router();

//create post route for adding new recipe
router.post("/", async (req, res) => {
    const result = await RecipeDao.add(req.body);
    res.status(200).json(result);
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
