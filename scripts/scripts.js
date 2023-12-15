
const searchBar = document.querySelector(".searchbar");
const searchSubmit = document.querySelector(".input-submit");
const semesterBox = document.querySelector(".semesterBox");
const api = null; // root link for API calls
const breadcrumb = document.querySelector(".breadcrumb");
const nav = document.getElementById("n");
const searchOutput = document.querySelector(".search-output");

// contains all extracted courses from every program
let extractedCourses = [];
// contains programs and number of semesters as key-val pairs
let numSemesters = {};

searchSubmit.addEventListener("click", search());
searchBar.addEventListener("input", search);

//let temp = fetch('https://www.google.com',{
//  headers:{
//
//  },
//    method:"GET",
//    credentials: "same-origin", // include, *same-origin, omit
//}).then(res=>{

//  console.log(res)
//    if(res.ok){
//      return res.json();
//    }else{
//      throw new Error("Something went wrong!")
//    }
//}).then(data=>{
//  console.log(data);
//}).catch(err=>{
//  console.log(err)
//});
//console.log(temp)

fetchProgramJson();

function search() {
  //console.log(extractedCourses);
  // Takes user input, searches through course list parsed through json for each character entered
  // Search bar appears on every page. Search function will be called by eventlistener listening for characters entered in input
  // displays search results as list of links popped up below the search bar
  while (searchOutput.firstChild) {
    searchOutput.removeChild(searchOutput.firstChild);
  }

  for (let i = 0; i < extractedCourses.length; i++) {
    if (
      extractedCourses[i].toLowerCase().includes(searchBar.value) &&
      searchBar.value
    ) {
      newElem = document.createElement("a");
      newElem.href =
        "/pages/course.html?code=" + encodeURIComponent(extractedCourses[i]);
      newElem.classList.add("course-anchor");
      newElem.onclick = loadCoursePage;
      newElem.textContent = extractedCourses[i];
      searchOutput.append(newElem);
    }
  }
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
    numSemesters[program] = numberOfSemesters;
    console.log(numSemesters);
  }
  //console.log(extractedCourses);
  return extractedCourses;
}

function fetchProgramJson() {
  fetch("./scripts/software_development.json")
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

// for (elem in softwareDev) {
//   newElem = document.createElement("div");
//   newElem.innerHtml = elem;
//   document.getElementById("n").appendChild(newElem);
// }

function navigation() {
  // for each program in program list:
  //      append program to sidebar nav with correct href
  const programList = [
    "Software Development",
    "Web Development",
    "Network Systems",
  ];
  for (let program of programList) {
    console.log(program);
    newElem = document.createElement("p");
    // Jeremy told me we need to get rid of INNERHTML because it is a security vulnerability
    // consider .textcontent
    newElem.innerHTML = program;
    nav.append(newElem);
  }

}

function updateBreadCrumb() {
  // Page name, program name, and semester number are stored in variables
  // Updates breadcrumb div with proper information
}

function parseProgram() {}


function loadCoursePage() {
  let url = new URLSearchParams(window.location.search);
  let courseCode = url.get("code");
  // needs to wait until after window has loaded
  console.log(courseCode);
  if (courseCode == "CPRG213") {
    test = document.createElement("p");
    test.textContent = "hello world";
    nav.append(test);
  }
}


function populateBox() {
  // Calls API for specific page, program, and semester
  // For each semester div/block:
  //      append semester number
  //      append courses with anchor links to course page
}

navigation();

