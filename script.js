
document.addEventListener("DOMContentLoaded", function () {

    // Mobile Menu
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const isOpen = navLinks.classList.contains("active");

            menuBtn.textContent = isOpen ? "✕" : "☰";
            menuBtn.setAttribute("aria-expanded", isOpen);

        });

        // Close menu after clicking a link
        const links = document.querySelectorAll(".nav-links a");

        links.forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuBtn.textContent = "☰";
                menuBtn.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Contact Form
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const status = document.getElementById("formStatus");

            status.textContent = "Thank you, " + name +
                "! Your form is working successfully.";

            contactForm.reset();
        });
    }

});
