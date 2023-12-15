-- CreateTable
CREATE TABLE "programs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "semesters" INTEGER NOT NULL,
    "years" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "school" TEXT NOT NULL,

    CONSTRAINT "programs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courses" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "semester" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "credits" INTEGER NOT NULL,
    "description" TEXT,
    "programId" TEXT,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "CourseResources" (
    "id" TEXT NOT NULL,
    "courseCode" TEXT NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "CourseResources_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_programId_fkey" FOREIGN KEY ("programId") REFERENCES "programs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseResources" ADD CONSTRAINT "CourseResources_courseCode_fkey" FOREIGN KEY ("courseCode") REFERENCES "courses"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
