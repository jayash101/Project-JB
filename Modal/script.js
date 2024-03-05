const container = document.querySelector(".container");
const clickMe = document.querySelector(".clickMe");
const popUpBox = document.querySelector(".popUpBox");
const backButton = document.querySelector(".back");

clickMe.addEventListener("click", () => {
    popUpBox.classList.add("popUpShow");

    // On button click, create a new div to show dim effect
    const backgroundDisplay = document.createElement("div");
    container.appendChild(backgroundDisplay);
    backgroundDisplay.classList.add("backgroundDisplay");
});

backButton.addEventListener("click", () => {
    popUpBox.classList.remove("popUpShow");

    // On back click, remove the div from the document
    const backgroundDisplay = document.querySelector(".backgroundDisplay");
    backgroundDisplay.remove();
})