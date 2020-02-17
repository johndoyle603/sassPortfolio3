let menuBtn = document.querySelector(".menu-btn");
let menuWordBtn = document.querySelector(".menu-type");
let menu = document.querySelector(".menu");
let menuNav = document.querySelector(".menu-nav");
let menuBranding = document.querySelector(".menu-branding");
let navItem = document.querySelectorAll(".nav-item");

// Set state of menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
menuWordBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItem.forEach(item => item.classList.add("show"));

    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItem.forEach(item => item.classList.remove("show"));

    // Set menu state
    showMenu = false;
  }
}
