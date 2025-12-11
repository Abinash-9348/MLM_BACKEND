import { MemberIdGeneration } from '@prisma/client';
import { prisma } from '../../../db/connectDB';


export const generateUserId = async (): Promise<number> => {
  const counter = await prisma.counter.upsert({
    where: { id: 1 },
    update: { userId: { increment: 1 } },
    create: { id: 1, userId: 100001 },
  });

  return counter.userId;
};

export const generateMemberId = async (userId: number): Promise<string> => {
  const settings = await prisma.generalSettings.findFirst();
  const mode = settings?.memberIdGeneration ?? MemberIdGeneration.RANDOM;

  if (mode === MemberIdGeneration.SEQUENCE) {
    const counter = await prisma.counter.upsert({
      where: { id: 1 },
      update: { userId: { increment: 1 } },
      create: { id: 1, userId: 100000 },
    });

    return `MBR-${String(counter.userId).padStart(6, "0")}`;
  }

  const rnd = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `MBR-${rnd}`;
};
