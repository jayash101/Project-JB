//* 1. Initialize the variables
const timeNow = document.querySelector(".timeNow");

//* 2. Function for current time
const currentTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    
    (hours == 0) ? hours = 12 : hours;

    if(hours > 12){
        hours -= 12;
        session = "PM";
    }

    hours = (hours < 10)? "0" + hours : hours;
    minutes = (minutes < 10)? "0" + minutes : minutes;
    seconds = (seconds < 10)? "0" + seconds : seconds;

    time = `${hours}:${minutes}:${seconds} ${session}`;
    timeNow.textContent = time;
}

//* 3. SetInterval function
document.addEventListener("DOMContentLoaded", event => {
    setTimeout(currentTime, 0);         //Used for initial load time
    setInterval(currentTime, 1000);
});