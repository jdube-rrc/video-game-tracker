-- AlterTable
ALTER TABLE "HardwareLog" ADD COLUMN     "userId" TEXT;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "avatar" TEXT,
    "biography" TEXT,
    "tagline" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserFavoriteGames" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_UserFavoriteGenres" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_UserFavoriteGames_AB_unique" ON "_UserFavoriteGames"("A", "B");

-- CreateIndex
CREATE INDEX "_UserFavoriteGames_B_index" ON "_UserFavoriteGames"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserFavoriteGenres_AB_unique" ON "_UserFavoriteGenres"("A", "B");

-- CreateIndex
CREATE INDEX "_UserFavoriteGenres_B_index" ON "_UserFavoriteGenres"("B");

-- AddForeignKey
ALTER TABLE "HardwareLog" ADD CONSTRAINT "HardwareLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFavoriteGames" ADD CONSTRAINT "_UserFavoriteGames_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFavoriteGames" ADD CONSTRAINT "_UserFavoriteGames_B_fkey" FOREIGN KEY ("B") REFERENCES "VideoGame"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFavoriteGenres" ADD CONSTRAINT "_UserFavoriteGenres_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFavoriteGenres" ADD CONSTRAINT "_UserFavoriteGenres_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
