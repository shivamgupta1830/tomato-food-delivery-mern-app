import mongoose, { Mongoose } from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://shivamgupta26206:9838531617@cluster0.9qdyl3w.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
