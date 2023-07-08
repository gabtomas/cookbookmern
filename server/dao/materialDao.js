const dbConnection = require("../dbConnection");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for material
const materialSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    baseUnit: {
        type: String,
        required: true,
    },
    pricePerUnit: {
        type: Number,
        required: true,
    },
});

//create model for material
const Material = mongoose.model("Material", materialSchema);

class MaterialDao {
    constructor(db) {
        this.db = db;
    }

    //add material to database
    async add(material) {
        const newMaterial = new Material(material);
        const result = await newMaterial.save();
        return result;
    }

    //get all materials from database
    async getAll() {
        const result = await Material.find();
        return result;
    }
}

module.exports = new MaterialDao(dbConnection);
