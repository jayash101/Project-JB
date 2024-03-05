const submit = document.querySelector(".submit");
const displayOutput = document.querySelector(".displayOutput");

let count = 0;

//* 1. Function to generate random guess
const randomGuess = function(){
    let randomNumber = Math.floor(Math.random() * 9 + 1);
    return randomNumber;
};

const randomOutput = randomGuess();

//* 2. Function to check if the guess is correct
const checkGuess = () => {
    const userInput = document.querySelector(".userInput").value;
    console.log(randomOutput);
    let guess = parseInt(userInput);

    if(guess < randomOutput){
        displayOutput.textContent = `Your guess is too small 🥲`;
        displayOutput.classList.remove("correct");
        displayOutput.classList.add("incorrect");
        count++;
    }
    else if(guess > randomOutput){
        displayOutput.textContent = `Your guess is too large 🥲`;
        displayOutput.classList.remove("incorrect");
        displayOutput.classList.add("incorrect");
        count++;
    }
    else{
        displayOutput.textContent = `Congratulations! It only took ${count} guess`;
        displayOutput.classList.remove("incorrect");
        displayOutput.classList.add("correct");
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
};

//* 3. Submit event button
submit.addEventListener("click", event => {
    event.preventDefault();
    checkGuess();
});