const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// script - menu -header
// < ! skill-- >
document.querySelector('.skill').addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }, 200);
});

// < ! about-- >
document.querySelector('.about').addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }, 200);
})

// < ! contact-header-- >
document.querySelector('.contact-header').addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }, 200);
})
//end
