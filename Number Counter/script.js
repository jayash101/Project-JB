const numberShow = document.querySelector(".numberShow");
const increaseCounter = document.querySelector(".increaseCounter");
const resetCounter = document.querySelector(".resetCounter");
const decreaseCounter = document.querySelector(".decreaseCounter");

let number = 0;

//* 1. Button to increment counter
increaseCounter.addEventListener("click", event => {
    number++;
    numberShow.textContent = number;
});

//* 2. Button to reset counter
resetCounter.addEventListener("click", event => {
    number = 0;
    numberShow.textContent = number;
});

//* 3. Button to decrement counter
decreaseCounter.addEventListener("click", event => {
    number--;
    numberShow.textContent = number;
});