-- CreateTable
CREATE TABLE "VideoGame" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL DEFAULT '',
    "avg_critic_rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "avg_user_rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "artwork_url" TEXT NOT NULL DEFAULT '',
    "developer" TEXT NOT NULL DEFAULT '',
    "publisher" TEXT NOT NULL DEFAULT '',
    "initial_release_date" TEXT NOT NULL DEFAULT '',
    "platforms" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "genre" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "multiplayer" BOOLEAN NOT NULL DEFAULT false,
    "trailer_url" TEXT,

    CONSTRAINT "VideoGame_pkey" PRIMARY KEY ("id")
);
