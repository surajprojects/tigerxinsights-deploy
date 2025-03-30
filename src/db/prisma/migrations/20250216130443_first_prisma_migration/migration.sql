-- CreateTable
CREATE TABLE "Toolkit" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "link" TEXT NOT NULL,

    CONSTRAINT "Toolkit_pkey" PRIMARY KEY ("id")
);
