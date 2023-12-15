const semesterList = document.querySelector(".semester-list");
const semesterBox = document.querySelector(".semester-box");
const semesters = document.querySelector(".semesters");
let extractedCourses = [];
let numberOfSemesters = 0;
let courseClicked;
let APIres;

softwareDev = {
  "Software Development": {
    Semester1: ["CPRG213", "CPRG216", "CPNT217", "COMM238", "MATH237"],
    Semester2: ["CPRG211", "CPRG250", "CPSY200", "CPSY202", "PHIL241"],
    Semester3: ["CPRG303", "CPRG304", "CPRG306", "CPRG307", "CPSY301"],
    Semester4: ["CPRG305", "CPSY300", "INTP302", "ITSC320", "PROJ309"],
  },
};

populateSemBoxes();

function assignProgramData(data) {
  console.log(data);
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
  return extractedCourses;
}

function populateSemBoxes() {
  assignProgramData(softwareDev);
  let coursePerSem = extractedCourses.length / numberOfSemesters;
  counter = 0;
  for (let i = 0; i < numberOfSemesters; i++) {
    newBox = document.createElement("div");
    newBox.classList.add("semesterBox");
    semesters.append(newBox);
    newUl = document.createElement("ul");
    newUl.id = "semester" + (i + 1);
    newBox.append(newUl);

    for (let j = 0; j < coursePerSem; j++) {
      anchorElem = document.createElement("a");
      anchorElem.setAttribute("onclick", "getCourseInfo(this)");
      newUl.append(anchorElem);
      newElem = document.createElement("li");
      newElem.innerHTML = extractedCourses[counter];
      anchorElem.append(newElem);
      counter++;
    }
  }
}

async function getCourseInfo(e) {
  listelem = e.innerHTML.slice(4, -5);
  console.log(listelem);
  resJSON = await getCourseAPI(listelem);
  data = resJSON.data.coursesFound[0];
  console.log(data);
  localStorage.setItem("code", data.code);
  localStorage.setItem("Desc", data.description);
  localStorage.setItem("name", data.name);
  localStorage.setItem("res", data.courseResources);
  document.location.href = "../pages/course.html";
}

async function getCourseAPI(course) {
  let temp = await fetch(
    "http://server.jgaribsin.com:3000/courses/find?code=" + course,
    {
      headers: {},
      method: "GET",
    }
  );
  return temp.json();
}
