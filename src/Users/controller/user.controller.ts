import { Request, Response } from "express";
import { registerUser } from "../services/user.services";

export const userController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Fill all the fields" });
    }

    const user = await registerUser(name, email, password);

    if (!user) {
      return res.status(400).json({ msg: "User not registered" });
    }

    return res.status(201).json({
      msg: "User registered successfully",
      user,
    });

  } catch (error) {
    return res.status(500).json({
      msg: "Error creating user",
      error: error instanceof Error ? error.message : error
    });
  }
};
