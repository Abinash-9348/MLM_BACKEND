import { prisma } from '../../../db/connectDB';
import { generateMemberId } from "../../utils/middleware/getUserId";

export class userRepo {

  async createUserRepo(data: any) {

    const memId = await generateMemberId(data.userId);
    return await prisma.user.create({
      data: {
        fname: data.fname,
        mname: data.mname ?? "",
        lname: data.lname,

        country_code: data.country_code,
        mobile1: data.mobile1,
        mobile2: data.mobile2 ?? "",

        email: data.email,
        password: data.password,

        age: data.age,
        gender: data.gender,

        pin_code: data.pin_code,
        city: data.city,
        state: data.state,

        userId: data.userId,
        memId: memId,

        purchese_plan: data.purchese_plan ?? null,
        total_bv: data.total_bv ?? 0,
        total_user_bv: data.total_user_bv ?? 0,
        total_purchese_bv: data.total_purchese_bv ?? 0,

        status: "ACTIVE",
        isBlock: 0,
      },
    });

  }
  async findbyemailrepo(email: string) {
    return prisma.user.findUnique({ where: { email: email } })
  }
  async getAllUsers(page: number, limit: number) {
    if (!Number.isInteger(page) || page < 1) page = 1;
    if (!Number.isInteger(limit) || limit < 1) limit = 10;
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        skip,
        take: limit,
        orderBy: { id: 'desc' },
      }),
      prisma.user.count(),
    ]);

    return { users, total };
  }
  async getById(id: number) {
    return await prisma.user.findUnique({
      where: { id },
      select: {
        fname: true,
        lname: true,
        email: true,
        mobile1: true,
        gender: true,
        purchese_plan: true,
        total_purchese_bv: true,
        total_user_bv: true,
        total_bv: true,
        profile_img: true,
        pin_code: true,
        city: true,
        state: true,
        memId: true,
        upline: true,
        sponser: true,
        left_leg: true,
        right_leg: true,
        myjoinig: true,
      }
    })
  }
}
