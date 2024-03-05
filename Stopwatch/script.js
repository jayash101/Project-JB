const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

//* Runtimer is used to start or stop the timer
let runTimer = null;

//* Initialize the time values as zero
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

//* Runtimer is used to check if the timer is running or not
let isRunning = false;

//* Timer start function
const startTimer = () => {
    if(!isRunning){
        runTimer = setInterval(updateTimer, 10);
        isRunning = true;
    }
}

//* Timer stop function
const stopTimer = () => {
    if(isRunning){
        clearInterval(runTimer);
        isRunning = false;
    }
}

//* Timer reset function
const resetTimer = () => {
    clearInterval(runTimer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    timer.textContent = "00:00:00";
    isRunning = false;
}

//* Timer update function
const updateTimer = function(){
    milliseconds++;

    if(milliseconds > 100){
        milliseconds = 0;
        seconds++;
    }
    
    if(seconds >= 60){
        seconds = 0;
        
        minutes++;
    }
    
    if(minutes >= 60){
        minutes = 0;
    }

    timer.textContent = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

//* Function to pad the single digit number to the double digit starting with zero
const pad = function(value){
    return (value < 10)? "0" + value : value;
}

//* Button to start the timer
start.addEventListener("click", event => {
    startTimer();
})

//* Button to stop the timer
stop.addEventListener("click", event => {
    stopTimer();
})

//* Button to reset the timer
reset.addEventListener("click", event => {
    resetTimer();
})