// Light and dark theme
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {
  document.body.classList.add("light");
  themeBtn.textContent = "☀";
}

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeBtn.textContent = "☀";
    localStorage.setItem("portfolioTheme", "light");
  } else {
    themeBtn.textContent = "☾";
    localStorage.setItem("portfolioTheme", "dark");
  }
});

// Mobile navigation menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show");
  menuBtn.textContent = navMenu.classList.contains("show") ? "✕" : "☰";
});

// Close mobile menu after clicking a link
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("show");
    menuBtn.textContent = "☰";
  });
});

// Small changing role text
const roles = ["CSE Student", "Web Developer", "Tech Enthusiast"];
let roleIndex = 0;

setInterval(function () {
  roleIndex = (roleIndex + 1) % roles.length;
  document.getElementById("roleText").textContent = roles[roleIndex];
}, 2200);

// Current year
document.getElementById("year").textContent = new Date().getFullYear();
