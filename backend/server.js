import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

//config
const app = express();
const port = 4000;

//middlewares
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hi");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// mongodb+srv://shivamgupta26206:9838531617@cluster0.9qdyl3w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
