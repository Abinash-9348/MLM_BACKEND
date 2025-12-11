import Joi from "joi";

export const registerSchema = Joi.object({
  fname: Joi.string().trim().min(2).max(50).required(),
  mname: Joi.string().trim().allow("", null).optional(),
  lname: Joi.string().trim().min(2).max(50).required(),
  country_code: Joi.string().pattern(/^\+\d{1,4}$/).required(),
  mobile1: Joi.string().pattern(/^[0-9]{10}$/).required(),
  mobile2: Joi.string().pattern(/^[0-9]{10}$/).allow("", null).optional(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string()
    .min(8)
    .max(20)
    .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/)
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain uppercase, lowercase, number and special character"
    }),
  age: Joi.number().integer().min(18).max(100).required(),
  gender: Joi.string().valid("MALE", "FEMALE", "OTHER").required(),
  pin_code: Joi.number().integer().required(),
  city: Joi.string().trim().required(),
  state: Joi.string().trim().required()
}).unknown(true); 
