// Using ScrollReveal library

let slideUp = {
    distance: '150%',
    duration: "1000",
    origin: 'bottom',
    ease: "ease-out",
    opacity: "0"
};

let reveal = {
    distance: "100%",
    duration: "1000",
    ease: "ease-out",
    interval: "500",
    opacity: "0"
};

// On initial load, everything on viewport loads in one after another
let revealSpline = {
    delay: "1000",
    distance: "0%",
    duration: "1000",
    ease: "ease-out",
    opacity: "0",
}

ScrollReveal().reveal(".reveal", reveal);
ScrollReveal().reveal(".reveal-spline", revealSpline);

ScrollReveal().reveal('#proj-ncr', slideUp);
ScrollReveal().reveal('#proj-oxygen', slideUp);
ScrollReveal().reveal('#proj-db', slideUp);
ScrollReveal().reveal('#proj-capstone', slideUp);