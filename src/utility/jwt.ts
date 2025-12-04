import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || "access_secret_fallback";
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "refresh_secret_fallback";

export const genAcessToken = (payload:object) =>{
  return jwt.sign(payload,ACCESS_SECRET,{expiresIn:"15m"})
}

export const genRefreshToken = (payload:object) =>{
    return jwt.sign(payload,REFRESH_SECRET,{expiresIn:"30d"})
}

export const verifyAcessToken = (token:string) =>{
  return jwt.verify(token,ACCESS_SECRET)
}

export  const verifyRefreshToken =(token :string) =>{
    return jwt.verify(token,REFRESH_SECRET)
}