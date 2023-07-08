const dbConnection = require("../dbConnection");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for recipe which includes an array of materials
const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    materials: [
        {
            type: Schema.Types.ObjectId,
            ref: "Material",
        },
    ],
});

//create model for recipe
const Recipe = mongoose.model("Recipe", recipeSchema);

class RecipeDao {
    constructor(db) {
        this.db = db;
    }

    //add recipe to database
    async add(recipe) {
        const newRecipe = new Recipe(recipe);
        const result = await newRecipe.save();
        return result;
    }

    //get all recipes from database
    async getAll() {
        const result = await Recipe.find().populate("materials");
        return result;
    }

    //get recipe by id from database
    async getById(id) {
        const result = await Recipe.findById(id).populate("materials");
        return result;
    }

    //update recipe by id in database
    async updateById(id, recipe) {
        const result = await Recipe.findByIdAndUpdate(id, recipe, {
            new: true,
        });
        return result;
    }

    //delete recipe by id from database
    async deleteById(id) {
        const result = await Recipe.findByIdAndDelete(id);
        return result;
    }
}

module.exports = new RecipeDao(dbConnection);
