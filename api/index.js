import dotenv from "dotenv";
dotenv.config();

import express from "express";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("api is working.");
});
