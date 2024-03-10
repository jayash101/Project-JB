// Predicted time
const about = document.querySelector('.about');

// Access time units
const countdownTime = document.querySelectorAll(".countdownTime");
const days = countdownTime[0];
const hours = countdownTime[1];
const minutes = countdownTime[2];
const seconds = countdownTime[3];

// Access required time
const currentYear = new Date().getFullYear();
const requiredTime = new Date(`${about.textContent}`);

// Countdown time
const countdown = () => {
    const currentTime = new Date();
    const difference = requiredTime - currentTime;

    // Convert milliseconds to respective units
    const day = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hour = Math.floor((difference / 1000 / 60 / 60) % 24);
    const minute = Math.floor((difference / 1000 / 60) % 60);
    const second = Math.floor((difference / 1000) % 60);

    // Double digit if less than 10    
    days.textContent = day;
    hours.textContent = hour < 10? '0' + hour : hour;
    minutes.textContent = minute < 10? '0' + minute : minute;
    seconds.textContent = second < 10? '0' + second : second;
    
    // Last 10 seconds animation
    if(seconds.textContent < 10){
        seconds.classList.add("timeChange");
    }
    else{
        seconds.classList.remove("timeChange");
    }

    // Minute change animation
    if(seconds.textContent === "59"){
        minutes.classList.add("slide");
    }
    else{
        minutes.classList.remove("slide");
    }

    // Hour Change Animation
    if(minutes.textContent === "59"){
        hours.classList.add("slide");
    }
    else{
        hours.classList.remove("slide");
    }

    // Day Change Animation
    if(hours.textContent === "23"){
        days.classList.add("slide");
    }
    else{
        days.classList.remove("slide");
    }

    if(difference < 0){
        clearInterval(countdown);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    setInterval(countdown, 1000);
})