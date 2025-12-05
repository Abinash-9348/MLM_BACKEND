import { Request, Response, NextFunction } from "express";
import { registerUser } from "../services/user.services";
import { AppError } from "../../utility/appError";
import { AppSuccess } from "../../utility/appSucess";
import { loginUserservices } from "../services/user.services";

import {
  ERROR_CODES,
  ERROR_MESSAGES,
  HTTP_STATUS,
  SUCCESS_CODES,
  SUCCESS_MESSAGES
} from "../../utility/error";

export const userController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return next(
        new AppError(
          ERROR_CODES.VALIDATION_ERROR,
          ERROR_MESSAGES.FILL_ALL_THE_FILEDS,
          HTTP_STATUS.BAD_REQUEST
        )
      );
    }

    const user = await registerUser(name, email, password);

    const response = new AppSuccess(
      SUCCESS_CODES.USER_CREATED,
      SUCCESS_MESSAGES.CREATED,
      HTTP_STATUS.CREATED,
      { user }
    );

    // FIX: use statusCode
    return res.status(response.status).json(response);

  } catch (error) {
    next(error);
  }
};

export const loginUserController = async(req:Request,res:Response) =>{
  try {
   const {email,password}=req.body
   if(!email){
    return res.status(404).json({msg:"email required"})
   } 
   if(!password){
    return res.status(404).json({msg:"password required"})
   }
   const user = await loginUserservices(email,password)
   if(!user){
    return res.status(404).json({msg:"user not login"})
   }
   return res.status(201).json({msg:"user login sucessfully",user})
  } catch (error) {
    return res.status(500).json(error)
  }
}
