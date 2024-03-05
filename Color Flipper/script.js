// const colors = ["#606c38","#283618","#fefae0","#dda15e","#bc6c25"];

const container = document.querySelector(".container");
const clickMeButton = document.querySelector(".clickMe");
const hexCode = document.querySelector(".hexCode");
const hexMenu = document.querySelector(".hexMenu a");
const hexData = document.querySelector(".hexData");

//* Click event for button
clickMeButton.addEventListener("click", event => {
    const colorCode = colorValueGenerator();
    container.style.backgroundColor = `rgb(${colorCode})`;
    hexCode.textContent = `rgb(${colorCode})`;
    hexCode.style.color = `rgb(${colorCode})`;

    if(colorCode === "0, 0, 0"){
        hexData.classList.add("reverse");
        clickMeButton.classList.add("reverse");
    }
});

const colorValueGenerator = function(){
    let value1 = "";
    let value2 = "";
    let value3 = "";
    const random1 = Math.floor(Math.random() * 255);
    value1 += random1;

    const random2 = Math.floor(Math.random() * 255);
    value2 += random2;
    

    const random3 = Math.floor(Math.random() * 255);
    value3 += random3;
    

    return `${value1}, ${value2}, ${value3}`;
}