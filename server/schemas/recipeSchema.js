const getRecipeSchema = {
    type: "object",
    properties: {
        ingredient: {
            type: "string",
            pattern: "^[0-9]+$",
        },
        price_lt: {
            type: "string",
            pattern: "^\\d+(\\.\\d{1,2})?$",
        },
    },
};

const createRecipeSchema = {
    type: "object",
    properties: {
        recipe: {
            type: "object",
            properties: {
                name: { type: "string", maxLength: 64, minLength: 1 },
                description: { type: "string", maxLength: 32000 },
                duration: { type: "integer", maximum: 9999 },
                difficulty: { type: "string", maxLength: 16 },
            },
            required: ["name", "description", "duration", "difficulty"],
        },
        materials: {
            type: "array",
            minItems: 1,
            uniqueItems: true,
            items: {
                type: "object",
                properties: {
                    id: { type: "string", pattern: "^[0-9a-fA-F]{24}$" },
                    amount: { type: "number" },
                },
                required: ["id", "amount"],
            },
        },
    },
    required: ["recipe", "materials"],
};

module.exports = {
    getRecipeSchema,
    createRecipeSchema,
};
