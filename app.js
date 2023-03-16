// Variables
const RPS = ["ROCK", "PAPER", "SCISSORS"];
let roundResult = "";

// Main Execution
playRound("roCk", getComputerChoice());

console.log(roundResult);

// Functions
function getComputerChoice() {
    return RPS[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, compChoice) {

    // Allows player to enter choice in case-insensitive format
    playerChoice = playerChoice.toUpperCase();

    if (compChoice === playerChoice) roundResult = "tie";

    // Player Winning Conditions
    if (playerChoice === RPS[0] && compChoice === RPS[2] ||
        playerChoice === RPS[2] && compChoice === RPS[1] ||
        playerChoice === RPS[1] && compChoice === RPS[0]) {
        roundResult = `Player Wins the round! \nPlayer: ${playerChoice} | Computer: ${compChoice}`;
    }

    // Computer Winning Conditions
    if (compChoice === RPS[0] && playerChoice === RPS[2] ||
        compChoice === RPS[2] && playerChoice === RPS[1] ||
        compChoice === RPS[1] && playerChoice === RPS[0]) {
        roundResult = `Computer Wins the round! \nComputer: ${compChoice} | Player: ${playerChoice}`;
    }
}
