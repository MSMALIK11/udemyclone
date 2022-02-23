import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const app = express();

import { connection } from "./DATABABSE/db.js";
import router from "./routes/route.js";

app.use(cors());
app.use(express.json());
app.use(cookieParser());
dotenv.config({ path: "./config/config.env" });
connection();

const PORT = process.env.PORT || 8000;

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server is running at port 8000`);
});
