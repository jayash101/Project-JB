// Current Year
const currentDate = document.querySelector(".currentDate");
currentDate.textContent = new Date().getFullYear();

// Navbar
const navBar = document.querySelector(".navBar");
window.addEventListener("scroll", () => {
    // Responsive JS
    if(window.innerWidth > 768){
        if (window.pageYOffset > 0) {
            navBar.classList.add("navBarScroll");
        }
        else {
            navBar.classList.remove("navBarScroll");
        }
    }
})