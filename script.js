 // =========================
// MOBILE MENU
// =========================
const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// =========================
// CLOSE MENU AFTER CLICK
// =========================

const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// =========================
// START BUTTON
// =========================

const startBtn =
    document.getElementById("startBtn");


startBtn.addEventListener("click", function () {

    alert(
        "Welcome to NovaTech! Let's get started."
    );

});


// =========================
// SIMPLE SCROLL EFFECT
// =========================

window.addEventListener("scroll", function () {

    const header =
        document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 4px 15px rgba(0,0,0,0.12)";

    } else {

        header.style.boxShadow =
            "0 2px 10px rgba(0,0,0,0.08)";

    }

});
