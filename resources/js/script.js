document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbarOptions = document.querySelector('.navbar--options');
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const mainContent = document.querySelector('main');


    hamburger.addEventListener('click', function() {
        navbarOptions.classList.toggle('active');
        hamburger.classList.toggle('active');
        mainContent.classList.toggle('blurred'); // Add this line
    });

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
