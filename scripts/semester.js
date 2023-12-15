const semesterList = document.querySelector('.semester-list');
const semesterBox = document.querySelector('.semester-box');
const semesters = document.querySelector('.semesters');
const searchBar = document.querySelector('.searchbar');
const searchOutput = document.querySelector(".search-output");
const searchSubmit = document.querySelector(".input-submit");
const breadCrumb = document.querySelector(".breadcrumb")
let extractedCourses = []
let numberOfSemesters = 0;

searchSubmit.addEventListener("click", search());
searchBar.addEventListener("input", search);

populateSemBoxes();
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

// change this to load semester page -- or do we even need this on this page
function loadCoursePage() {
  let url = window.location.search;
  let urlParams = new URLSearchParams(url);
  let courseCode = urlParams.get('code');
  // needs to wait until after window has loaded
  console.log(courseCode);
  h1.textContent = courseCode;
  // this should call the course description API
  courseDescr.textContent = 'this (course description) should be populated by the API!';
  // this will have to be in a loop. for resource in resources json: create and append element
  let resources = document.createElement('p');
  resources.textContent = 'this (resource section) should also be populated by the API';
  resourceDiv.append(resources);
}

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
  // need to update this to dynamically use course names
  console.log(numberOfSemesters);
  updateBreadCrumb(numberOfSemesters);
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

function updateBreadCrumb(semesterName) {
  // Page name, program name, and semester number are stored in variables
  // Updates breadcrumb div with proper information
  // need to update this to dynamically show program instead of hardcoding
  breadCrumb.textContent = `Home > Software Development > Semester ${semesterName}`;
}