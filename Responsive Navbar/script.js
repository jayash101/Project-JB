const navBar = document.querySelector(".navBar");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const menuListResponsive = document.querySelector(".menuListResponsive");
const content = document.querySelector(".lorem");

// Browser Scroll Event
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 0){
        navBar.classList.add("navBarScroll");
    }
    else{
        navBar.classList.remove("navBarScroll");
    }
})

// Hamburger CLick Event
hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("hamburgerMenuRotate");
    menuListResponsive.classList.toggle("menuDisplay");
    content.classList.toggle("loremMargin");
});