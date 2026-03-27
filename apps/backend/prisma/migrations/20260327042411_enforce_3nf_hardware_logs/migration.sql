/*
  Warnings:

  - You are about to drop the column `artwork_url` on the `HardwareLog` table. All the data in the column will be lost.
  - You are about to drop the column `gameTitle` on the `HardwareLog` table. All the data in the column will be lost.
  - Added the required column `videoGameId` to the `HardwareLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HardwareLog" DROP COLUMN "artwork_url",
DROP COLUMN "gameTitle",
ADD COLUMN     "videoGameId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "HardwareLog" ADD CONSTRAINT "HardwareLog_videoGameId_fkey" FOREIGN KEY ("videoGameId") REFERENCES "VideoGame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
