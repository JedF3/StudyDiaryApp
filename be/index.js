import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { db } from "./config/db.js";
import entryRouter from "./routes/entryRoutes.js";
import userRouter from "./routes/userRoutes.js";
import helmet from "helmet";
import { errorHandler } from "./middleware/errorHandler.js";
dotenv.config();
db();
const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(entryRouter);
app.use(userRouter);
app.use(errorHandler);
app.listen(process.env.PORT, ()=>console.log("server running at "+process.env.PORT));