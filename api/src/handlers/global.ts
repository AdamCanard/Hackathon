import {Request, Response} from 'express';
import {prisma} from '../prisma/client';

export async function findProgramsAndCourses(req: Request, res: Response) {
  const userQuery = req.query.query as string;

  const coursesByName = await prisma.course.findMany({
    where: {name: {contains: userQuery, mode: 'insensitive'}},
  });
  const coursesByCode = await prisma.course.findMany({
    where: {code: {contains: userQuery, mode: 'insensitive'}},
  });
  const programsByName = await prisma.program.findMany({
    where: {name: {contains: userQuery, mode: 'insensitive'}},
  });

  return res.status(200).json({
    message: `Found ${
      coursesByName.length + coursesByCode.length
    } courses and ${programsByName.length} programs`,
    status: 200,
    data: {
      courses: [...coursesByCode, ...coursesByName],
      programs: [...programsByName],
    },
  });
}
