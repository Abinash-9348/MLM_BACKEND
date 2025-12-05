/*
  Warnings:

  - Made the column `memberIdGeneration` on table `GeneralSettings` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
CREATE SEQUENCE generalsettings_id_seq;
ALTER TABLE "GeneralSettings" ALTER COLUMN "id" SET DEFAULT nextval('generalsettings_id_seq'),
ALTER COLUMN "memberIdGeneration" SET NOT NULL;
ALTER SEQUENCE generalsettings_id_seq OWNED BY "GeneralSettings"."id";
