import {Request, Response} from 'express';
import {prisma} from '../prisma/client';

export async function findAll(req: Request, res: Response) {
  console.log(`Invoked (${req.originalUrl}): fetching all courses`);

  const courses = await prisma.course.findMany({
    select: {
      name: true,
      code: true,
      description: true,
      year: true,
      semester: true,
      credits: true,
      programName: true,
    },
  });

  return res.status(200).json({
    message: `Showing all ${courses.length} courses`,
    status: 200,
    data: {
      courses,
    },
  });
}

export async function find(req: Request, res: Response) {
  const courseCode = req.query.code as string;
  console.log(
    `Invoked (${req.originalUrl}): requested to find course using code ${courseCode}`
  );

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
      description: true,
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

export async function add(req: Request, res: Response) {
  const {code, credits, name, semester, year, description} = req.body;
  console.log(
    `Invoked (${req.originalUrl}): requested to create course ${code} with data ${req.body}`
  );

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

export async function addResource(req: Request, res: Response) {
  const {code, resource} = req.body;
  console.log(
    `Invoked (${req.originalUrl}): requested to add ${resource} to ${code}`
  );

  await prisma.courseResource.create({
    data: {data: resource, course: {connect: {code}}},
  });

  return res.status(200).json({
    message: `Added resource for course ${code}`,
    status: 200,
    data: {},
  });
}

export async function remove(req: Request, res: Response) {
  const {code} = req.body;
  console.log(
    `Invoked (${req.originalUrl}): requested to remove course ${code}`
  );
  await prisma.course.delete({where: {code}});

  return res.status(200).json({
    message: `Deleted course ${code}`,
    status: 200,
    data: {},
  });
}

export async function removeResources(req: Request, res: Response) {
  const {code} = req.body;
  console.log(`Invoked (${req.originalUrl}): requested to delete ${code}`);

  const resources = await prisma.courseResource.deleteMany({
    where: {courseCode: code},
  });

  return res.status(200).json({
    message: `Deleted ${resources.count} for course ${code}`,
    status: 200,
    data: {},
  });
}
