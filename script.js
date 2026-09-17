// Aurelia Café & Bistro
// Simple website interactions

document.addEventListener("DOMContentLoaded", function () {

    // Show a welcome message when the page loads
    console.log("Welcome to Aurelia Café & Bistro!");

    // Smooth navigation for menu links
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Navigation:", link.textContent);
        });
    });

    // Add a small effect to buttons
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.style.transform = "scale(0.97)";

            setTimeout(function () {
                button.style.transform = "";
            }, 150);
        });
    });

});