document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbarOptions = document.querySelector('.navbar--options');

    hamburger.addEventListener('click', function() {
        navbarOptions.classList.toggle('active');
    });
});