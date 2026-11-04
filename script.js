const themeBtn = document.getElementById("themeBtn");

const contactBtn = document.getElementById("contactBtn");

const message = document.getElementById("message");

// Toggle between light and dark theme

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

});

// Contact button functionality

contactBtn.addEventListener("click", function () {

    message.textContent = "Thanks for visiting my profile!";

});