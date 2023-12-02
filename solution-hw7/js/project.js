document.body.style.scrollBehavior = "smooth";

let projectUp = {
    distance: '125%',
    duration: "500",
    opacity: "0",
    easing: "ease-out"
};

let projectUpDelay = {
    distance: "125%",
    duration: "1000",
    opacity: "0",
    delay: "250",
    interval: "500",
    easing: "ease-out"
};


ScrollReveal().reveal(".animationUp", projectUp);
ScrollReveal().reveal(".animationUpDelay", projectUpDelay);
// scroll();


// Something something code weeee
// Smooth scroll function with easeInOutQuad easing equation
// function scrollTo(element, duration) {
//     const target = document.querySelector(element);
//     const targetPosition = target.getBoundingClientRect().top;
//     const startPosition = window.pageYOffset;
//     const startTime = performance.now();
  
//     function easeInOutQuad(t, b, c, d) {
//       t /= d / 2;
//       if (t < 1) return c / 2 * t * t + b;
//       t--;
//       return -c / 2 * (t * (t - 2) - 1) + b;
//     }
  
//     function animation(currentTime) {
//       const timeElapsed = currentTime - startTime;
//       const run = easeInOutQuad(timeElapsed, startPosition, targetPosition, duration);
//       window.scrollTo(0, run);
//       if (timeElapsed < duration) requestAnimationFrame(animation);
//     }
  
//     requestAnimationFrame(animation);
//   }
  
//   // Usage example
//   const targetSection = '#section2'; // Change this to the ID of your target section
//   const duration = 1000; // Change duration as needed (in milliseconds)
  
//   document.querySelector('a[href="' + targetSection + '"]').addEventListener('click', function (e) {
//     e.preventDefault();
//     scrollTo(targetSection, duration);
//   });