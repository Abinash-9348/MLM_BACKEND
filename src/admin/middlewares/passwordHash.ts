
import bcrypt from "bcrypt";
import config from "../../../config/index";
import log from "../../utils/logger";



export async function hashPassword(password: string) {
  log.info(config.SALT_WORK_FACTOR)
  const salt = await bcrypt.genSalt(config.SALT_WORK_FACTOR);
  return bcrypt.hash(password, salt);
}


export async function validatePassword(
  candidatePassword: string,
  hashedPassword: string
) {
  return bcrypt.compare(candidatePassword, hashedPassword);
}
