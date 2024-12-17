// Select the main navbar and the navigation links
const navbar = document.querySelector('#main-navbar');
const navLinks = document.querySelectorAll('.nav-item a');

// Handle scroll events to change navbar style
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Check if the scroll position is greater than 100px
        navbar.classList.add('scrolled'); // Add 'scrolled' class for the solid navbar effect
    } else {
        navbar.classList.remove('scrolled'); // Remove the 'scrolled' class if scrolled back to top
    }
});

// Highlight the active link when clicked
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Remove the active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        // Add the active class to the clicked link
        event.target.classList.add('active');
    });
});

