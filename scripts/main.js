/* Keypress Controller */
document.addEventListener("keydown", function(ev){
    // All key-related funcs called here:
    ev = ev || window.event;
    escapeMenu(ev.key);
})

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


/* Iframe Navigation */
var navFrame = document.getElementById("navigation");

function goToPage(locationX){
    navFrame.src = locationX + ".html";
    closeMenu();
    location.href = "#" + locationX;
}

document.getElementById("home-tab").addEventListener("click", function(){
    goToPage("Homepage", "This is the homepage.");
});

document.getElementById("about-tab").addEventListener("click", function(){
    goToPage("about", "Meet the team.");
});

document.getElementById("portfolio-tab").addEventListener("click", function(){
    goToPage("portfolio", "Check out our projects.");
});

document.getElementById("contact-tab").addEventListener("click", function(){
    goToPage("contact", );
});

document.getElementById("home-tab-mobile").addEventListener("click", function(){
    goToPage("homepage");
});

document.getElementById("about-tab-mobile").addEventListener("click", function(){
    goToPage("about");
});

document.getElementById("portfolio-tab-mobile").addEventListener("click", function(){
    goToPage("portfolio");
});

document.getElementById("contact-tab-mobile").addEventListener("click", function(){
    goToPage("contact");
});

if(!!~location.href.indexOf("#")){
    var tab = location.href.trim().split("#")[1];
    if(location.href.trim().endsWith("#")){
        goToPage("homepage"); 
    }
    else{
        goToPage(tab);
    }
}
else{
    goToPage("homepage");
}