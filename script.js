const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const body1 = document.querySelector("body");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    body1.classList.toggle("fix-poz")
    
}

// const navLink = document.querySelectorAll(".nav-item");

// navLink.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
//     // document.body.style.position = ""; 
//     body1.classList.remove("fix-poz");
    
    
// }