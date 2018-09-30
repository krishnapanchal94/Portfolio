// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navitem = document.querySelectorAll(".nav-item");

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navitem.forEach(item => item.classList.add("show"));

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navitem.forEach(item => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
  }
}

//Set Work Section targeted link open in new tab

window.onload = function() {
  var anchors = document.getElementById("work").getElementsByTagName("a");
  if (anchors) {
    for (var i = 0; i < anchors.length; i++) {
      anchors[i].setAttribute("target", "_blank");
    }
  }
};

//Set Dynamic Content call based on Requested Link
/*Step : 1 Define All projects & hide all*/
var tcp_terminal = document.querySelector("#tcp_terminal");
var styloce = document.querySelector("#styloce");
var droid = document.querySelector("#droid");
var school = document.querySelector("#school");
var journal = document.querySelector("#journal");
var estate = document.querySelector("#estate");
var kintu_crm = document.querySelector("#kintu_crm");
var good_deeds = document.querySelector("#good_deeds");
//Shoe Description Button
// const desclink = document.querySelector("#desc-link");
/*On work page in desc link onclick event call projectDescription(req) function
Where req is id of project
set the id's name as you define in section for their respective project
Fro eg , section id ='terminal' than in function pass termoinal on click event like projectDescription('terminal') */
function projectDescription(req) {
  var current_location = window.location.pathname;
  var base_location = window.location.origin;
  var new_location = current_location.replace(
    "work.html",
    "project_details.html"
  );
  window.location.href = base_location + new_location + "?id=" + req;
}
