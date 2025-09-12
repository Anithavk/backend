import express from "express";
import recipeRouter from "./src/routes/recipeRoutes.js";
import connectDB from "./src/config/db.js";

const app = express();
app.use(express.json()); // required for JSON body

// Base route
app.use("/api/recipes", recipeRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found", path: req.originalUrl });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectDB();
});
