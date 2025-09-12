import mangoose from "mongoose";

const recipeSchema = new mangoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    procedure: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    prepTime: { type: String, required: true },
    cookTime: { type: String, required: true },
    servings: { type: Number, required: true },
  },
  { timestamps: true }
);

const Recipe = mangoose.model("Recipe", recipeSchema);
export default Recipe;
