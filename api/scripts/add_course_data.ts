import {prisma} from '../src/prisma/client';

async function main() {
  // Create software development first semester courses
  await prisma.course.createMany({
    data: [
      {
        code: 'COMM238',
        name: 'Technical Communications I',
        semester: 1,
        year: 1,
        credits: 3,
      },
      {
        code: 'CPNT217',
        name: 'Introduction to Network Systems',
        semester: 1,
        year: 1,
        credits: 3,
      },
      {
        code: 'CPRG213',
        name: 'Web Development 1',
        semester: 1,
        year: 1,
        credits: 3,
      },
      {
        code: 'CPRG216',
        name: 'Object Oriented Programming 1',
        semester: 1,
        year: 1,
        credits: 3,
      },
      {
        code: 'MATH237',
        name: 'Mathematics for Technologists',
        semester: 1,
        year: 1,
        credits: 3,
      },
    ],
  });
  console.log(`Added first semester courses to database`);

  // Create SD course
  await prisma.program.create({
    data: {
      name: 'Software Development',
      school: 'School for Advanced Digital Technology',
      semesters: 4,
      years: 2,
      type: 'Diploma',
    },
  });
  console.log(`Created Software Development program in database`);

  // Update program courses via course codes
  await prisma.program.update({
    where: {name: 'Software Development'},
    data: {
      courses: {
        connect: [
          {
            code: 'COMM238',
          },
          {
            code: 'CPNT217',
          },
          {
            code: 'CPRG213',
          },
          {
            code: 'CPRG216',
          },
          {
            code: 'MATH237',
          },
        ],
      },
    },
  });
  console.log(
    `Added first semester course relations to Software Development program`
  );
  // End main
}

main();
