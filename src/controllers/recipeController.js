import Recipe from "../models/recipe.js";

export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find()
      .select("-password -__v -createdat -updatedat")
      .lean();
    res.status(200).json({
      data: recipes,
      status: "success",
      message: "recipe added successfully",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRecipe = async (req, res) => {
  const recipe = req.body;
  console.log(recipe);
  const newRecipe = new Recipe(recipe);
  try {
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getRecipeById = async (req, res) => {
  const id = req.params.id;
  try {
    const recipe = await Recipe.findById(id)
      .select("-password -__v -createdat -updatedat")
      .lean();
    res.status(200).json(recipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateRecipe = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  console.log(req.params.id);
  const recipe = await Recipe.findByIdAndUpdate(id, newData, { new: true });
  res.status(200).json({
    data: recipe,
    status: "success",
    message: "recipe updated successfully",
  });
};

export const deleteRecipe = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteRecipe = await Recipe.findByIdAndDelete(id);
    res
      .status(200)
      .json({ data: deleteRecipe, message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
