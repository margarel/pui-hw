// Using ScrollReveal library

document.body.style.scrollBehavior = "smooth";

// Loads the initial viewport elements after a delay
let projectUpDelay = {
    distance: "125%",
    duration: "1000",
    opacity: "0",
    delay: "250",
    interval: "500",
    easing: "ease-out"
};

// Loads the elements based on scroll position
let projectUp = {
    distance: '125%',
    duration: "500",
    opacity: "0",
    easing: "ease-out"
};

ScrollReveal().reveal(".animationUpDelay", projectUpDelay);
ScrollReveal().reveal(".animationUp", projectUp);