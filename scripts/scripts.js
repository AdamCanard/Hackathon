const searchBar = document.querySelector(".searchBar");
const semesterBox = document.querySelector(".semesterBox");
const api = null // root link for API calls
const breadcrumb = document.querySelector(".breadcrumb")
const nav = document.querySelector("nav")

searchBar.addEventListener("input", search());

function search() {
    // Takes user input, calls database API for each character entered after 1 second of no typing (for server efficiency)
    // Search bar appears on every page. Search function will be called by eventlistener listening for characters entered in input
    // displays search results as list of links popped up below the search bar
    displaySearch();
}

function displaySearch() {
    // dynamically displays results obtained from search() function as a list of links below search bar
}

function assignProgramLength() {
    // for program in programList:
    //      
}

function navigation() {
    // for each program in program list:
    //      append program to sidebar nav with correct href
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