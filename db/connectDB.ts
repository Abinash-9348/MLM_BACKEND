import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import dotenv from "dotenv";
import log from "../src/utils/logger";

dotenv.config({ path: "env/.env.development" }); // load env

const connectionString = process.env.DB_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });

export const db_connect = async () => {
  try {
    await prisma.$connect();
    log.info("✅ Connected to PostgreSQL using Prisma v7");
  } catch (err: any) {
    log.error("❌ Database connection failed", err);
    process.exit(1);
  }
};
