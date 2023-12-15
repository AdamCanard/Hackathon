const searchBar = document.querySelector(".searchbar");
const searchSubmit = document.querySelector(".input-submit");
const semesterBox = document.querySelector(".semesterBox");
const api = null // root link for API calls
const breadcrumb = document.querySelector(".breadcrumb")
const nav = document.getElementById("n");
const searchOutput = document.querySelector(".search-output")
//const bodyA = document.getElementsByTagName("bodyDiv")
//bodyA.addEventListener("click",(e)=>{
  //console.log(e);
//});

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

function displaySearch() {
  // dynamically displays results obtained from search() function as a list of links below search bar
}

function assignProgramLength() {
  // for program in programList:
  //
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