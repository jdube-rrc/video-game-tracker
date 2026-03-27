-- This migration duplicates earlier 3NF changes; make it safe to run repeatedly.
ALTER TABLE "HardwareLog"
DROP COLUMN IF EXISTS "artwork_url",
DROP COLUMN IF EXISTS "gameTitle";

ALTER TABLE "HardwareLog"
ADD COLUMN IF NOT EXISTS "videoGameId" INTEGER;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'HardwareLog_videoGameId_fkey'
  ) THEN
    ALTER TABLE "HardwareLog"
    ADD CONSTRAINT "HardwareLog_videoGameId_fkey"
    FOREIGN KEY ("videoGameId") REFERENCES "VideoGame"("id")
    ON DELETE RESTRICT
    ON UPDATE CASCADE;
  END IF;
END $$;
