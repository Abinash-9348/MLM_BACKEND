import { hashPassword } from "../../utility/hash";
import { prisma } from "../../config/db";
import { AppError } from "../../utility/appError";
import { ERROR_CODES, ERROR_MESSAGES, HTTP_STATUS } from "../../utility/error";
import bcrypt from 'bcrypt'
import { genAcessToken,genRefreshToken } from "../../utility/jwt";


export const registerUser = async (name: string, email: string, password: string) => {
  const existUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existUser) {
    throw new AppError(
      ERROR_CODES.USER_ALREADY_EXISTS,
      ERROR_MESSAGES.USER_ALREADY_EXISTS,
      HTTP_STATUS.CONFLICT
    );
  }

  // Hash password
  const hashedPassword = await hashPassword(password);

  // Create user
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      refreshToken: null
    }
  });

  return user;
};


export const loginUserservices = async (email:string,password:string) =>{
  const existEmail = await prisma.user.findUnique({where:{email}})
  if(!existEmail){
    throw new AppError(ERROR_CODES.EMAIL_NOT_EXISTS,ERROR_MESSAGES.INVALID_EMAIL,HTTP_STATUS.NOT_FOUND)
  }
  const ismatchpassword = await bcrypt.compare(password,existEmail.password)
  if(!ismatchpassword){
    throw new AppError(ERROR_CODES.VALIDATION_ERROR,ERROR_MESSAGES.VALIDATION_ERROR,HTTP_STATUS.UNAUTHORIZED)
  }
  const payload = {
    id:existEmail.id
  }
  const Acesstoken = await genAcessToken(payload)
  const RefreshToken = await genRefreshToken(payload)
   return {
    message: "Login successful",
    user: {
      id: existEmail.id,
      name: existEmail.name,
      email: existEmail.email,
    },
    Acesstoken,
    RefreshToken,
  };
}