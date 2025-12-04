import express from "express";
import { userController } from "../controller/user.controller";

export const userrouter = express.Router();

userrouter.post("/api/register", userController);
