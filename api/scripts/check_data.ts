import {prisma} from '../src/prisma/client';

async function main() {
  //   const programs = await prisma.program.findMany();
  //   const courses = await prisma.course.findMany();

  //   console.log(JSON.stringify({programs, courses}));

  const programs = await prisma.program.findMany({
    include: {
      courses: true,
    },
  });

  console.log(JSON.stringify({programs}));
}

main();
