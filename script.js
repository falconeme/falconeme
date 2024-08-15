// Cierre de menu en dispositivos móviles
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav__link");
    const checkbox = document.getElementById("open-menu");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            checkbox.checked = false;
        });
    });
});
