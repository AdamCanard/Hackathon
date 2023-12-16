/*
  Warnings:

  - You are about to drop the column `programId` on the `courses` table. All the data in the column will be lost.
  - You are about to drop the `CourseResources` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CourseResources" DROP CONSTRAINT "CourseResources_courseCode_fkey";

-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_programId_fkey";

-- AlterTable
ALTER TABLE "courses" DROP COLUMN "programId",
ADD COLUMN     "programName" TEXT;

-- DropTable
DROP TABLE "CourseResources";

-- CreateTable
CREATE TABLE "course_resources" (
    "id" TEXT NOT NULL,
    "courseCode" TEXT NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "course_resources_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_programName_fkey" FOREIGN KEY ("programName") REFERENCES "programs"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_resources" ADD CONSTRAINT "course_resources_courseCode_fkey" FOREIGN KEY ("courseCode") REFERENCES "courses"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
