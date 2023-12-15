const h1 = document.querySelector('h1');
const courseDescr = document.querySelector('.course-descr');
const resourceDiv = document.querySelector('.resources');

loadCoursePage();

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