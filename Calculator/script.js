//* 1. Initialization variables
const displayOutput = document.querySelector(".displayOutput");
const operators = document.querySelectorAll(".operator");
const digits = document.querySelectorAll(".digit");
const result = document.querySelector(".equal");

//* 2. Operator button click event
operators.forEach(operator => {
    operator.addEventListener("click", event => {
        let lastCharacter = displayOutput.value[displayOutput.value.length - 1];

        if(lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "*" || lastCharacter === "/"){
            // alt + 246: ÷ and alt + 0215: ×
            displayOutput.value = displayOutput.value.substring(0, displayOutput.value.length - 1) + operator.textContent;
            //? substring(0, stringLength) : prints string from 0 to given string length
        }
        else{
            displayOutput.value += operator.textContent;
        }
    })
});

//* 3. Number button click event
digits.forEach(digit => {
    if(digit.textContent !== "C"){
        digit.addEventListener("click", event => {
            displayOutput.value += digit.textContent ;
        })
    }
    else{
        digit.addEventListener("click", event => {
            displayOutput.value = "";
        })
    }
});

//* 4. Equal button click event
result.addEventListener("click", event => {
    try{    
        displayOutput.value = eval(displayOutput.value);
    }
    catch(error){
        displayOutput.value = "Error";
        displayOutput.style.color = "red";
        setTimeout(() => {
            displayOutput.value = "";
            displayOutput.style.color = "blue";
        }, 1000);
    }
});