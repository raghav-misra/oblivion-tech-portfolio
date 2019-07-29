var menuFadeIn = {
    opacity: '1',
    right: '0px',
    bottom: '0px'
};

var menufadeOut = {
    opacity: '0',
    right: '-100vw',
    bottom: '100vh'
};


keyframer.createCSSTransitionOn(
    "click", "#more-info", "all 1s ease-in-out", menuFadeIn, "#lehuy-card"
);

keyframer.createCSSTransitionOn(
    "mousedown", "#more-info", "all 1s ease-in-out", menuFadeIn, "#raghav-card"
);