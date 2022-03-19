// Animated navbar
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
    nav.classList.toggle('nav-active');
});



// Reveal on scroll
window.addEventListener('scroll', reveal);// Selecting the window and adding the event listener of scroll with a name of reveal for the function

function reveal () {
    let reveals = document.querySelectorAll('.reveal');// Selecting all the elements with the class of .reveal

    for(let i = 0; i< reveals.length; i++) {
        let windowHeight = window.innerHeight;// Setting the window height to the inner window
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');// Once revealed the class of active will appear
        } else {
            reveals[i].classList.remove('active');// If out of reveal view, then remove the class
        }
    }
}

