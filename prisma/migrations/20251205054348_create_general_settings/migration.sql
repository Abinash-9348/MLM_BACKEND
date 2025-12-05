-- CreateEnum
CREATE TYPE "MemberIdGeneration" AS ENUM ('RANDOM', 'SEQUENCE');

-- CreateEnum
CREATE TYPE "FileStorageMode" AS ENUM ('LOCAL', 'S3');

-- CreateTable
CREATE TABLE "GeneralSettings" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "dateformat" TEXT NOT NULL,
    "currencySymbol" TEXT NOT NULL,
    "timeZone" TEXT NOT NULL,
    "allowedFileTypes" TEXT NOT NULL,
    "maxFileSizeMB" INTEGER NOT NULL,
    "fileStorageMode" "FileStorageMode" NOT NULL,
    "localFilePath" TEXT,
    "s3Bucket" TEXT,
    "s3Folder" TEXT,
    "maxPlanCreation" INTEGER NOT NULL,
    "multiBinaryEnable" TEXT NOT NULL DEFAULT 'Y',
    "memberIdGeneration" "MemberIdGeneration" DEFAULT 'RANDOM',
    "minDirectSponsorsForWithdrawal" INTEGER NOT NULL,
    "minBVForWithdrawal" INTEGER NOT NULL,
    "incomeGenerationMode" TEXT NOT NULL,
    "dailyCycleStart" TEXT,
    "dailyCycleEnd" TEXT,
    "weeklyCycleStartDay" TEXT,
    "weeklyCycleStartTime" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GeneralSettings_pkey" PRIMARY KEY ("id")
);
