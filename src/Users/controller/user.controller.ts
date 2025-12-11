import { Request, Response } from "express";
import { UserServices } from "../services/user.services";
import { registerSchema } from "../validation/user.validate";


export class userController {
  private repo = new UserServices();

  userController = async (req: Request, res: Response) => {
    try {
      const { error } = registerSchema.validate(req.body, { abortEarly: false });

      if (error) {
        return res.status(400).json({
          msg: error.details.map((d: any) => d.message),
        });
      }

      const user = await this.repo.createUserServices(req.body);

      return res.status(201).json({
        msg: "user created successfully",
        user,
      });

    } catch (error: any) {
      //  THIS LINE IS CRITICAL
      console.error("PRISMA ERROR →", error.message);

      return res.status(500).json({
        msg: error.message,   //  return message, not object
      });
    }
  };
  getAlluser = async (req: Request, res: Response) => {
    try {
      const page = Number(req.query.page as string)
      const limit = Number(req.query.limit as string)
      const result = await this.repo.getAllUsers(page, limit)
      return res.status(200).json({
        success: true,
        message: 'Users fetched successfully',
        ...result,
      });
    } catch (error: any) {
      console.error("PRISMA ERROR →", error.message);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch users',

      });
    }
  }
  getone = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id)
      if (!id) {
        return res.status(404).json({ msg: "id not found" })
      }
      const user = await this.repo.findone(id)
      if (!user) {
        return res.status(404).json({ msg: "user not found" })
      }
      return res.status(200).json({ msg: "user fetch sucessfully", user })
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
