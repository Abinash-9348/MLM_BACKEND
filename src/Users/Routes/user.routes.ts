import express from "express";
import { userController } from "../controller/user.controller";
import { loginUserController } from "../controller/user.controller";

export const userrouter = express.Router();

userrouter.post("/api/register", userController);
userrouter.post('/api/login',loginUserController)