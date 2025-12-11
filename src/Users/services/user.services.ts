import { userRepo } from "../repo/user.repo";
import { hashPassword } from "../../admin/middlewares/passwordHash";
import { generateUserId } from "../../utils/middleware/getUserId";
//import { generateMemberId } from "../../utility/getUserId";

export class UserServices {
  private repo = new userRepo();

  async createUserServices(data: any) {
    //  Check email uniqueness
    const existEmail = await this.repo.findbyemailrepo(data.email);
    if (existEmail) {
      throw new Error("Email already exists");
    }

    //  Hash password
    const hashedPassword = await hashPassword(data.password);

    //  Generate userId + memId
    const userId = await generateUserId();



    // Create user
    const user = await this.repo.createUserRepo({
      ...data,
      userId,

      password: hashedPassword,

      //  System defaults
      status: "ACTIVE",
      isBlock: 0,
      total_bv: 0,
      total_user_bv: 0,
      total_purchese_bv: 0
    });

    return user;
  }
  async getAllUsers(page = 1, limit = 10) {
    const { users, total } = await this.repo.getAllUsers(page, limit);

    const totalPages = Math.ceil(total / limit);

    return {
      data: users,
      pagination: {
        totalItems: total,
        currentPage: page,
        totalPages,
        limit,
      },
    };
  }
  async findone(id: number) {
    const user = this.repo.getById(id)
    return user
  }

}
