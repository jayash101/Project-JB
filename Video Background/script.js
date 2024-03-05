const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const buttonContainer = document.querySelector(".button");
const videoContainer = document.querySelector(".videoContainer");

play.addEventListener("click", () => {
    play.classList.toggle("toggleButton");
    buttonContainer.classList.toggle("toggleButtonContainer");
    
    // Toggle to pause if play and vice versa
    videoContainer.paused ? videoContainer.play() : videoContainer.pause();

    // Toggle to pause button if play button and vice versa
    let text = play.textContent;
    play.textContent = text == "Play ▶" ? "Pause⏸️" : "Play ▶";
})