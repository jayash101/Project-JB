//* 1. Declare initialization variables
const userInput = document.querySelectorAll(".userInput");

const playerChoiceDisplay = document.querySelector(".playerChoiceSpan");
const computerChoiceDisplay = document.querySelector(".computerChoiceSpan");

const playerScoreDisplay = document.querySelector(".playerScoreDisplaySpan");
const computerScoreDisplay = document.querySelector(".computerScoreDisplaySpan");

const resultDisplay = document.querySelector(".resultDisplay");

let playerScore = 0;
let computerScore = 0;

//* 2. Create function for the game logic
const gameLogic = (element) => {

    const choices = ["👊", "🤚", "✂️"];

    const randomIndex = Math.floor(Math.random() * choices.length);

    computerChoiceDisplay.textContent = choices[randomIndex];
    console.log(computerChoiceDisplay.textContent);
    switch (element) {
        case "👊":
            if (computerChoiceDisplay.textContent === "✂️") {
                playerScore++;
                computerChoiceDisplay.textContent = "✂️";
                resultDisplay.textContent = "Player Wins!";
                resultDisplay.classList.remove("loser");
                resultDisplay.classList.remove("tie");
                resultDisplay.classList.add("winner");
            }
            else if (computerChoiceDisplay.textContent === "🤚") {
                computerScore++;
                resultDisplay.textContent = "Computer Wins!";
                resultDisplay.classList.remove("winner");
                resultDisplay.classList.remove("tie");
                resultDisplay.classList.add("loser");
            }
            else {
                resultDisplay.textContent = "Its a tie!";
                resultDisplay.classList.remove("winner");
                resultDisplay.classList.remove("loser");
                resultDisplay.classList.add("tie");
            }
            break;

        case "🤚":
            if(computerChoiceDisplay.textContent === "👊"){
                playerScore++;
                resultDisplay.textContent = "Player Wins!";
                resultDisplay.classList.remove("loser");
                resultDisplay.classList.remove("tie");
                resultDisplay.classList.add("winner");
            }
            else if(computerChoiceDisplay.textContent === "✂️"){
                computerScore++;
                resultDisplay.textContent = "Computer Wins!";
                resultDisplay.classList.remove("winner");
                resultDisplay.classList.remove("tie");
                resultDisplay.classList.add("loser");
            }
            else{
                resultDisplay.textContent = "Its a tie!";
                resultDisplay.classList.remove("winner");
                resultDisplay.classList.remove("loser");
                resultDisplay.classList.add("tie");
            }
            break;
        
        default:
            if(computerChoiceDisplay.textContent === "🤚"){
                playerScore++;
                resultDisplay.textContent = "Player Wins!";
                resultDisplay.classList.remove("loser");
                resultDisplay.classList.remove("tie");
                resultDisplay.classList.add("winner");
            }
            else if(computerChoiceDisplay.textContent === "👊"){
                computerScore++;
                resultDisplay.textContent = "Computer Wins!";
                resultDisplay.classList.remove("winner");
                resultDisplay.classList.remove("tie");
                resultDisplay.classList.add("loser");
            }
            else{
                resultDisplay.textContent = "Its a tie!";
                resultDisplay.classList.remove("winner");
                resultDisplay.classList.remove("loser");
                resultDisplay.classList.add("tie");
            }
    }

    scoreUpdate(playerScore, computerScore);
}

//* 3. Create function for score update
function scoreUpdate(player, computer){
    playerScoreDisplay.textContent = player;
    playerScoreDisplay.classList.add("winner");
    
    computerScoreDisplay.textContent = computer;
    computerScoreDisplay.classList.add("wloser");
}

const choiceDisplay = (element) => {
    playerChoiceDisplay.textContent = element;
}


//* 4. Create click event for buttons
userInput.forEach(button => {
    button.addEventListener("click", event => {
        choiceDisplay(button.textContent);
        gameLogic(button.textContent);
    });
})