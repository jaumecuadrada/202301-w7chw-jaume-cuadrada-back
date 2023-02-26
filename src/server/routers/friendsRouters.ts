import { Router } from "express";
import { getFriends } from "../controllers/friendsControllers.js";

export const friendsRouter = Router();

friendsRouter.get("/", getFriends);
