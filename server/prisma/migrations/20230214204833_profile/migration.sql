-- CreateTable
CREATE TABLE "USER" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "userAuthId" INTEGER NOT NULL,
    "profileId" INTEGER NOT NULL,

    CONSTRAINT "USER_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "USER_AUTH" (
    "id" SERIAL NOT NULL,
    "hashedPassword" TEXT NOT NULL,

    CONSTRAINT "USER_AUTH_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "USER_PROFILE" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "avatarId" INTEGER NOT NULL,

    CONSTRAINT "USER_PROFILE_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "USER_AVATAR" (
    "id" SERIAL NOT NULL,
    "characterImgUrl" TEXT NOT NULL,
    "carImgUrl" TEXT NOT NULL,

    CONSTRAINT "USER_AVATAR_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "USER_email_key" ON "USER"("email");

-- CreateIndex
CREATE UNIQUE INDEX "USER_userAuthId_key" ON "USER"("userAuthId");

-- CreateIndex
CREATE UNIQUE INDEX "USER_profileId_key" ON "USER"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "USER_PROFILE_avatarId_key" ON "USER_PROFILE"("avatarId");

-- AddForeignKey
ALTER TABLE "USER" ADD CONSTRAINT "USER_userAuthId_fkey" FOREIGN KEY ("userAuthId") REFERENCES "USER_AUTH"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "USER" ADD CONSTRAINT "USER_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "USER_PROFILE"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "USER_PROFILE" ADD CONSTRAINT "USER_PROFILE_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "USER_AVATAR"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USER"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
