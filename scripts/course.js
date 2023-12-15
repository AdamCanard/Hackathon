const h1 = document.querySelector("h1");
const courseDescr = document.querySelector(".course-descr");
const resourceDiv = document.getElementById("resources");
const searchBar = document.querySelector(".searchbar");
const searchOutput = document.querySelector(".search-output");
const searchSubmit = document.querySelector(".input-submit");
let extractedCourses = [];
let numSemesters = {};

loadCoursePage();

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

function loadCoursePage() {
  let url = window.location.search;
  let urlParams = new URLSearchParams(url);
  let header = document.createElement("h1");
  let desc = document.createElement("p");
  let res = document.createElement("p");
  let courseCode = localStorage.getItem("code");
  let courseDesc = localStorage.getItem("Desc");
  let courseName = localStorage.getItem("name");
  let courseRes = localStorage.getItem("res");
  //needs to wait until after window has loaded
  header.textContent = courseCode + ": " + courseName;
  //this should call the course description API
  desc.textContent = courseDesc;
  //this will have to be in a loop. for resource in resources json: create and append element
  // let resources = document.createElement("p");
  // resources.textContent =
  //   "this (resource section) should also be populated by the API";
  resourceDiv.append(header);
  resourceDiv.append(desc);
  resourceDiv.append(courseRes);
}
