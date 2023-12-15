const searchBar = document.querySelector(".searchbar");
const searchSubmit = document.querySelector(".input-submit");
const semesterBox = document.querySelector(".semesterBox");
const api = null // root link for API calls
const breadcrumb = document.querySelector(".breadcrumb")
const nav = document.getElementById("n");
const searchOutput = document.querySelector(".search-output")


let testPrograms = ['cprg213', 'cprg216', 'cpnt217', 'comm238', 'math237'];

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
  // Takes user input, calls database API for each character entered after 1 second of no typing (for server efficiency)
  // Search bar appears on every page. Search function will be called by eventlistener listening for characters entered in input
  // displays search results as list of links popped up below the search bar
  while (searchOutput.firstChild) {
    searchOutput.removeChild(searchOutput.firstChild);
  }

  for (let i = 0; i < testPrograms.length; i++) {
    if (testPrograms[i].includes(searchBar.value) && searchBar.value) {
      newElem = document.createElement('p');
      newElem.textContent = testPrograms[i];
      searchOutput.append(newElem);
    }
  }
}

function assignProgramLength(data) {
  // this is currently broken
  // I need a way to access the indexes of the dictionary without using its string key
  // and this does not work :(
  let numberOfSemesters = 0;
  for (let program in data) {
    if (data.hasOwnProperty(program)) {
      console.log(`Program: ${program}`);
    }

    let semesters = data[program];
    for (let semester in semesters) {
      if (semesters.hasOwnProperty(semester)) {
        console.log(`Semester: ${semester}`);
        numberOfSemesters++;
      }
      console.log(`Number of semesters in ${program}: ${numberOfSemesters}`);

      let courses = semesters[semester];
      for (let course of courses) {
        console.log(`Course: ${course}`);
      }
    }
  }
}

function fetchProgramJson() {
  fetch("./scripts/software_development.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      program = data;
      //console.log(data);
      assignProgramLength(data);
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

function parseProgram() {
    
}

function populateBox() {
  // Calls API for specific page, program, and semester
  // For each semester div/block:
  //      append semester number
  //      append courses with anchor links to course page
}

navigation();