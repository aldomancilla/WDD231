document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.querySelector('nav ul');
    const navToggle = document.querySelector('.menu-toggle');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});