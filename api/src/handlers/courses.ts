import {Request, Response} from 'express';
import {prisma} from '../prisma/client';

// http://70.72.200.55:3000/courses/find?code=cpn
export async function findCourse(req: Request, res: Response) {
  const courseCode = req.query.code as string;

  const coursesFound = await prisma.course.findMany({
    where: {
      code: {contains: courseCode, mode: 'insensitive'},
    },
    select: {
      code: true,
      name: true,
      credits: true,
      programName: true,
      year: true,
      semester: true,
      courseResources: {
        select: {data: true},
      },
    },
  });

  return res.status(200).json({
    message: `Found ${coursesFound.length} courses`,
    status: 200,
    data: {
      coursesFound,
    },
  });
}

export async function addCourse(req: Request, res: Response) {
  const createdCourse = await prisma.course.create({
    data: {
      // TODO: verify client inputs
      ...req.body,
    },
  });

  return res.status(200).json({
    message: `Course ${createdCourse.name} created successfully`,
    status: 200,
    data: {},
  });
}

export async function addCourseResource(req: Request, res: Response) {
  //  TODO:

  return res;
}

export async function displayCourses(req: Request, res: Response) {
  const allCourses = await prisma.course.findMany({select: {name: true}});

  return res.status(200).json({
    message: `Showing all ${allCourses.length} courses`,
    status: 200,
    data: {
      allCourses,
    },
  });
}
