const h1 = document.querySelector('h1');
const courseDescr = document.querySelector('.course-descr');

loadCoursePage();

function loadCoursePage() {
  let url = window.location.search;
  let urlParams = new URLSearchParams(url);
  let courseCode = urlParams.get('code');
  // needs to wait until after window has loaded
  console.log(courseCode);
  h1.textContent = courseCode;
  // this should call the course description API
  courseDescr.textContent = courseDescr;
}