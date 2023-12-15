const h1 = document.querySelector('h1');
const courseDescr = document.querySelector('.course-descr');
const resourceDiv = document.querySelector('.resources');
const searchBar = document.querySelector('.searchbar');
const searchOutput = document.querySelector(".search-output");
const searchSubmit = document.querySelector(".input-submit");
let extractedCourses = [];
let programAndNumSemesters = {};

searchSubmit.addEventListener("click", search());
searchBar.addEventListener("input", search);

loadCoursePage();
fetchProgramJson();

function fetchProgramJson() {
  fetch("/scripts/test.json")
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
    programAndNumSemesters[program] = numberOfSemesters;
    console.log(programAndNumSemesters);
  }
  //console.log(extractedCourses);
  return extractedCourses;
}

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