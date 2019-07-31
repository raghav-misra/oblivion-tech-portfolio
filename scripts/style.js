// Menu Open & Close
var menu = document.querySelector("#menu");
var menuOverlay = document.getElementById("menu-overlay");

var menuOpen = false;

document.querySelector("#menu-open").addEventListener('click', openMenu);
document.querySelector("#menu-close").addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

function openMenu(){
  if(menuOpen == true) return;
  menuOpen = true;
  menuOverlay.style.display = "block";
  keyframer.createCSSAnimation("#menu-overlay", "fade-in 0.5s");
  menu.style.display = "block";
  keyframer.createCSSAnimation("#menu", "slide-in-right-fade 0.5s");
}

function closeMenu(){
  if(menuOpen == false) return;
  menuOpen = false;
  menuOverlay.style.display = "block";
  keyframer.createCSSAnimation("#menu-overlay", "fade-out 0.75s");
  menu.style.display = "block";
  keyframer.createCSSAnimation("#menu", "slide-out-right-fade 0.75s");
  setTimeout(function(){
    menu.style.display = "none";
    menuOverlay.style.display = "none";
  }, 450);
}

function escapeMenu(keyString){
  if(keyString === "Escape" && menuOpen === true) closeMenu();
}

// 

