// Variables
const RPS = ["ROCK", "PAPER", "SCISSORS"];
let roundResult = "";
let playerWinCount = 0;
let compWinCount = 0;
let promptMsg = `Write your Playing Choice!\nOptions are: ${RPS[0]}, ${RPS[1]} or ${RPS[2]}`;

// Main Execution
game()

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
        playerWinCount++;
    }

    // Computer Winning Conditions
    if (compChoice === RPS[0] && playerChoice === RPS[2] ||
        compChoice === RPS[2] && playerChoice === RPS[1] ||
        compChoice === RPS[1] && playerChoice === RPS[0]) {
        roundResult = `Computer Wins the round! \nComputer: ${compChoice} | Player: ${playerChoice}`;
        compWinCount++;
    }
}

function game() {

    // Reset Values for Counters
    playerWinCount = 0;
    compWinCount = 0;

    for (let i = 0; i < 5; i++) {
        playRound(prompt(`Round ${i + 1}\n${promptMsg}`), getComputerChoice());

        // Log Result of Round
        console.log(`Round ${i + 1}\n${roundResult}`);
    }

    if (playerWinCount === compWinCount)
        roundResult = "Game is a tie!";
    else if (playerWinCount > compWinCount)
        roundResult = "Player Wins Game!";
    else
        roundResult = "Computer Wins Game!";

    console.log(roundResult);
}