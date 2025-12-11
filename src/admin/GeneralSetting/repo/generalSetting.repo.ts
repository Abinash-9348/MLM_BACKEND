import { prisma } from "../../../../db/connectDB";
export class GeneralSettingRepository {
  async upsertSettings(data: any) {

    // Generate member ID if RANDOM
    // let generatedMemberId: string | null = null;
    // if (data.memberIdGeneration === MemberIdGeneration.RANDOM) {
    //   generatedMemberId = Math.random().toString(36).substring(2, 10).toUpperCase();
    // }
    return prisma.generalSettings.upsert({
      where: { id: 1 },
      update: {
        ...data,
      },
      create: {
        id: 1,
        ...data,

      },
    });
  }


  async getSettings() {
    return prisma.generalSettings.findUnique({ where: { id: 1 } });
  }

}



