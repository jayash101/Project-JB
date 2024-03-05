const navBar = document.querySelector(".navBar");
const backButton = document.querySelector(".back");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const secondary = document.querySelector(".secondary");

// Show menu 
hamburgerMenu.addEventListener("click", () => {
    // Mobile viewport
    if (window.innerWidth < 768) {
        navBar.classList.toggle("menuDisplay");
        hamburgerMenu.classList.toggle("hamRotate");
    }
    else{
        navBar.classList.add("menuDisplay");
        secondary.classList.add("dim");
        hamburgerMenu.classList.add("hamRotate");
    }   
});

// Hide menu bar
backButton.addEventListener("click", () => {
    navBar.classList.remove("menuDisplay");
    secondary.classList.remove("dim");
    hamburgerMenu.classList.remove("hamRotate");
});