const semesterList = document.querySelector('.semester-list');
let extractedCourses = []

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
  let numberOfSemesters = 0;
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
  console.log(extractedCourses);
  // this should populate the course boxes with the proper courses
  for (let i = 0; i < extractedCourses.length; i++) {
    newElem = document.createElement('li');
    newElem.textContent = extractedCourses[i];
    semesterList.append(newElem);
    console.log(extractedCourses[i]);
  }
}