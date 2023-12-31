import {Request, Response} from 'express';
import {prisma} from '../prisma/client';

export async function findAll(req: Request, res: Response) {
  const allPrograms = await prisma.program.findMany({select: {name: true}});
  console.log(`Invoked (${req.originalUrl}): fetching all programs`);

  return res.status(200).json({
    message: `Showing all ${allPrograms.length} programs`,
    status: 200,
    data: {
      allPrograms,
    },
  });
}

export async function find(req: Request, res: Response) {
  const programQuery = req.query.program as string;
  console.log(
    `Invoked (${req.originalUrl}): requested to find program using name ${programQuery}`
  );

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

export async function add(req: Request, res: Response) {
  const {name, semesters, years, type, school, courses} = req.body;
  // TODO: verify client inputs
  console.log(
    `Invoked (${req.originalUrl}): requested to create program ${name} with data ${req.body}`
  );

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

export async function remove(req: Request, res: Response) {
  const {program} = req.body;
  console.log(
    `Invoked (${req.originalUrl}): requested to remove program ${program}`
  );
  const deletedProgram = await prisma.program.delete({where: {name: program}});

  return res.status(200).json({
    message: `Deleted program ${program}`,
    status: 200,
    data: {},
  });
}
