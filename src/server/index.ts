import morgan from "morgan";
import express from "express";
import cors from "cors";
import { friendsRouter } from "./routers/friendsRouters.js";

export const app = express();

app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(express.json());

app.use(cors());

app.use("/friends", friendsRouter);
