var menuFadeIn = {
    opacity: '1',
    bottom: '0px',
    transform: 'scale(1)'
};

var menufadeOut = {
    opacity: '0',
    bottom: '100vh',
    transform: 'scale(0)'
};


keyframer.createCSSTransitionOn(
    "click", "#more-info", "all 1s ease-in-out", menuFadeIn, "#lehuy-card"
);

document.querySelector("#raghav-card").onclick = ()=>{
    keyframer.createCSSTransition(
        "#more-info", "all 1s ease-in-out", menuFadeIn
    );
}

document.querySelector("#more-info").onclick = (ev)=>{
    keyframer.createCSSTransition(
        "#more-info", "all 1s ease-in-out", menufadeOut
    );
    ev.preventDefault();
    ev.stopPropagation();
    return false;
}

document.querySelector(".bio").onclick = (ev)=>{
    ev.preventDefault();
    ev.stopPropagation();
    return false;
}
