import {Request, Response} from 'express';
import {prisma} from '../prisma/client';

export async function findProgram(req: Request, res: Response) {
  const programQuery = req.query.program as string;
  const programsFound = await prisma.program.findMany({
    where: {name: {contains: programQuery, mode: 'insensitive'}},
    select: {
      name: true,
      school: true,
      type: true,
      years: true,
      semesters: true,
      courses: {
        select: {
          code: true,
          name: true,
          semester: true,
          year: true,
          description: true,
        },
      },
    },
  });

  return res.status(200).json({
    message: `Found ${programsFound.length} programs`,
    status: 200,
    data: {
      programsFound,
    },
  });
}
export async function addProgram(req: Request, res: Response) {
  const {name, semesters, years, type, school, courses} = req.body;
  // TODO: verify client inputs

  const createdProgram = await prisma.program.create({
    data: {
      name,
      semesters,
      years,
      type,
      school,
    },
  });

  (courses as string[]).forEach(
    async course =>
      await prisma.program.update({
        where: {name},
        data: {
          courses: {
            connect: {
              code: course,
            },
          },
        },
      })
  );

  return res.status(200).json({
    message: `Program ${createdProgram.name} created successfully`,
    status: 200,
    data: {},
  });
}
