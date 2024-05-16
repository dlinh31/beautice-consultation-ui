document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbarOptions = document.querySelector('.navbar--options');

    hamburger.addEventListener('click', function() {
        navbarOptions.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 1000) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});