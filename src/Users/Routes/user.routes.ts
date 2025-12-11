import express from 'express'
import { userController } from '../controller/user.controller'

export const userRouter = express.Router()

const conttroller = new userController()

userRouter.post("/api/user/register",conttroller.userController.bind(userController))
userRouter.get('/api/getalluser',conttroller.getAlluser.bind(userController))
userRouter.get("/api/getone/:id",conttroller.getone.bind(userController))

