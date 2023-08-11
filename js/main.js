// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// Menu On Click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click outside Sidebar to remove NavBar
const hamburgerMenu = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
