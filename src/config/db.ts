import { PrismaClient } from "../generated/prisma/index.js";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import { logger } from "../utility/logger";

dotenv.config();

// Create PostgreSQL adapter
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);


export const prisma = new PrismaClient({ adapter });


export const db_connect = async () => {
  try {
  await prisma.$connect();
    logger.info("Connected to PostgreSQL using Prisma v7 🔥");
  } catch (err) {
    console.error("Database connection failed ❌", err);
  }
};