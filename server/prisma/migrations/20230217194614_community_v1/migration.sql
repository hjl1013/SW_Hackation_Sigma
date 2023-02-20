/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "COMMUNITY" (
    "id" SERIAL NOT NULL,
    "commuProfileImgUrl" TEXT NOT NULL,
    "commuName" TEXT NOT NULL,
    "commuIntro" TEXT NOT NULL,
    "commuHT" TEXT[],
    "commuMemberNumber" TEXT NOT NULL,

    CONSTRAINT "COMMUNITY_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "COMMU_THEME" (
    "id" SERIAL NOT NULL,
    "commuId" INTEGER NOT NULL,
    "commuThemeName" TEXT NOT NULL,
    "commuThemeIconUrl" TEXT NOT NULL,

    CONSTRAINT "COMMU_THEME_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "POST" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "commuThemeId" INTEGER NOT NULL,
    "ImgUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "numberOfHearts" INTEGER NOT NULL,
    "locationId" INTEGER NOT NULL,

    CONSTRAINT "POST_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LOCATION" (
    "id" SERIAL NOT NULL,
    "locationName" TEXT NOT NULL,
    "locationLatitude" DOUBLE PRECISION NOT NULL,
    "locationLongitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "LOCATION_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "COMMUNITY_id_key" ON "COMMUNITY"("id");

-- CreateIndex
CREATE UNIQUE INDEX "COMMUNITY_commuName_key" ON "COMMUNITY"("commuName");

-- CreateIndex
CREATE UNIQUE INDEX "COMMU_THEME_id_key" ON "COMMU_THEME"("id");

-- CreateIndex
CREATE UNIQUE INDEX "POST_locationId_key" ON "POST"("locationId");

-- CreateIndex
CREATE UNIQUE INDEX "LOCATION_locationName_key" ON "LOCATION"("locationName");

-- AddForeignKey
ALTER TABLE "COMMU_THEME" ADD CONSTRAINT "COMMU_THEME_commuId_fkey" FOREIGN KEY ("commuId") REFERENCES "COMMUNITY"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "POST" ADD CONSTRAINT "POST_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USER"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "POST" ADD CONSTRAINT "POST_commuThemeId_fkey" FOREIGN KEY ("commuThemeId") REFERENCES "COMMU_THEME"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "POST" ADD CONSTRAINT "POST_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "LOCATION"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
