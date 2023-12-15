const semesterList = document.querySelector('.semester-list');
const semesterBox = document.querySelector('.semester-box');
const semesters = document.querySelector('.semesters');
let extractedCourses = []
let numberOfSemesters = 0;

populateSemBoxes();

function fetchProgramJson() {
  fetch("/scripts/software_development.json")
  //fetch("http://server.jgaribsin.com:3000/courses/find", {
  //method:'GET',
  //credentials:'same-origin'})
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //console.log(data);
      assignProgramData(data);
    });
}

function assignProgramData(data) {
  for (let program in data) {
    if (data.hasOwnProperty(program)) {
      //console.log(`Program: ${program}`);
    }

    let semesters = data[program];
    for (let semester in semesters) {
      if (semesters.hasOwnProperty(semester)) {
        //console.log(`Semester: ${semester}`);
        numberOfSemesters++;
      }

      let courses = semesters[semester];
      for (let course of courses) {
        //console.log(`Course: ${course}`);
        extractedCourses.push(course);
      }
    }
    //numSemesters[program] = numberOfSemesters;
    //console.log(numSemesters);
  }
  //console.log(extractedCourses);
  return extractedCourses;
}

function populateSemBoxes() {
  fetchProgramJson();
  assignProgramData();
  // this should populate the course boxes with the proper courses
  numberOfSemesters = 4;
  console.log(numberOfSemesters);
  for (let i = 0; i < numberOfSemesters; i++) {
    newBox = document.createElement('div');
    newBox.classList.add('semester-box');
    semesters.append(newBox);
    newUl = document.createElement('ul');
    newBox.append(newUl);

    for (let course of extractedCourses) {
      newElem = document.createElement('li');
      newElem.textContent = course;
      newUl.append(newElem);
      console.log(course);
    }
  }
}