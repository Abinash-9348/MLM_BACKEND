
import { hashPassword } from "../../utility/hash";
import {prisma} from '../../config/db'


export const registerUser = async (name: string, email: string, password: string) => {
  const existUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existUser) {
    throw new Error("user already exists");
  }

  const hashedPassword = await hashPassword(password);

  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  return user;
};
