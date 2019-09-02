/* Portfolio Script */

// iOS hover work-arounds:
var coverArr = Array.prototype.slice.call(document.getElementsByClassName('project-card'));
coverArr.forEach(function(el){
  el.onmouseover = function(){
    el.getElementsByClassName("cover-up")[0].classList.add("hovered");
  }
  el.onmouseout = function(){
    el.getElementsByClassName("cover-up")[0].classList.remove("hovered");
  }
});

