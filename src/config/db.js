import mangoose from "mongoose";

const mongodbURI =
  "mongodb+srv://anithaavk_db_user:7nvizONXQMsXL6im@democluster.vtof4zx.mongodb.net/RecipeDB?retryWrites=true&w=majority&appName=democluster";
const connectDB = () => {
  mangoose
    .connect(mongodbURI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

export default connectDB;
