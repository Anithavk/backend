import express from "express";
import {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipeController.js";

const router = express.Router();

// Routes
router
  .route("/") // /api/recipes
  .get(getAllRecipes) // GET all
  .post(createRecipe); // POST create

router
  .route("/:id") // /api/recipes/:id
  .get(getRecipeById) // GET by ID
  .put(updateRecipe) // PUT update
  .delete(deleteRecipe); // DELETE

export default router;
