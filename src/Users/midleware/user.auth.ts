import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../../utils/jwt.utils";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Unauthorized" });

  const token = authHeader.split(" ")[1];
  try {
    if (!token) return res.status(401).json({ message: "Invalid access token" });
    const result = verifyJwt(token, "ACCESS_TOKEN_PUBLIC_KEY");
    if (!result.valid || !result.decoded) {
      return res.status(401).json({ message: "Invalid access token" });
    }
    (req as any).user = result.decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid access token" });
  }
};
