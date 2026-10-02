// ===== Button Click =====
const button = document.querySelector("button");

button.addEventListener("click", function() {
    alert("Welcome to my website!");
});

// ===== Navigation Message =====
const links = document.querySelectorAll("nav a");

links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        alert("You clicked: " + link.textContent);
    });
});