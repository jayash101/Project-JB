const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const container = document.querySelector(".container");
const clickMeButton = document.querySelector(".clickMe");
const hexCode = document.querySelector(".hexCode");
const hexMenu = document.querySelector(".hexMenu");
const hexData = document.querySelector(".hexData");

clickMeButton.addEventListener("click", event => {
    const colorCode = randomHexGenerator();
    container.style.backgroundColor = `#${colorCode}`;
    hexCode.textContent = `#${colorCode}`;
    hexCode.style.color = `#${colorCode}`;

    if(colorCode === "000000"){
        hexData.classList.add("reverse");
        clickMeButton.classList.add("reverse");
    }
})

const randomHexGenerator = function (){
    let hexValue = "";
    for(let i = 0; i < 6; i++){
        const randomIndex = Math.floor(Math.random() * hex.length);
        hexValue += hex[randomIndex];
    }
    return hexValue;
}