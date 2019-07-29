/* Keypress Controller */
document.addEventListener("keydown", function(ev){
    // All key-related funcs called here:
    ev = ev || window.event;
    escapeMenu(ev.key);
})

/* Iframe Navigation */
var navFrame = document.getElementById("navigation");

function goToPage(locationX){
    navFrame.src = locationX + ".html";
    closeMenu();
    location.href = "#" + locationX;
}

document.getElementById("home-tab").addEventListener("click", function(){
    goToPage("homepage");
});

document.getElementById("about-tab").addEventListener("click", function(){
    goToPage("about");
});

document.getElementById("portfolio-tab").addEventListener("click", function(){
    goToPage("portfolio");
});

document.getElementById("contact-tab").addEventListener("click", function(){
    goToPage("contact");
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