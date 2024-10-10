import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb://localhost:27017/dealsdray"
    )
    .then(() => console.log("DB Connected"))
    .catch((error) => console.error(error));
};