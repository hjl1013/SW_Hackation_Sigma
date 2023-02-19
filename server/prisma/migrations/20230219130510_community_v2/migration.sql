/*
  Warnings:

  - You are about to drop the column `locationId` on the `POST` table. All the data in the column will be lost.
  - You are about to drop the `LOCATION` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[destinationName]` on the table `USER` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `locationLatitude` to the `POST` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationLongitude` to the `POST` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationName` to the `POST` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destinationLatitude` to the `USER` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destinationLongitude` to the `USER` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destinationName` to the `USER` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "POST" DROP CONSTRAINT "POST_locationId_fkey";

-- DropIndex
DROP INDEX "POST_locationId_key";

-- AlterTable
ALTER TABLE "POST" DROP COLUMN "locationId",
ADD COLUMN     "locationLatitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "locationLongitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "locationName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "USER" ADD COLUMN     "destinationLatitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "destinationLongitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "destinationName" TEXT NOT NULL;

-- DropTable
DROP TABLE "LOCATION";

-- CreateIndex
CREATE UNIQUE INDEX "USER_destinationName_key" ON "USER"("destinationName");
