// Variables
// Constants
const RPS = ["ROCK", "PAPER", "SCISSORS"];
const optRock = document.querySelector('#btnRock');
const optPaper = document.querySelector('#btnPaper');
const optScissors = document.querySelector('#btnScissors');
const btnRestart = document.querySelector('#btnRestart');
const roundResTxt = document.querySelector('#roundRes');
const playerScoreTxt = document.querySelector('#playerScore');
const compScoreTxt = document.querySelector('#compScore');
const playerChoiceTxt = document.querySelector('#playerChoice');
const compChoiceTxt = document.querySelector('#compChoice');

// Lets
let roundResult = "";
let playerWinCount = 0;
let compWinCount = 0;
let roundCount = 0;

// Main Execution
btnRestart.style.display = "none";

// Functions
function getComputerChoice() {
    return RPS[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, compChoice) {

    // Update Choices
    playerChoiceTxt.textContent = `Player: ${playerChoice}`;
    compChoiceTxt.textContent = `Computer: ${compChoice}`;

    if (compChoice === playerChoice) roundResult = "Tie";

    // Player Winning Conditions
    if (playerChoice === RPS[0] && compChoice === RPS[2] ||
        playerChoice === RPS[2] && compChoice === RPS[1] ||
        playerChoice === RPS[1] && compChoice === RPS[0]) {
        roundResult = "Player Wins the Round!";
        playerWinCount++;
    }

    // Computer Winning Conditions
    if (compChoice === RPS[0] && playerChoice === RPS[2] ||
        compChoice === RPS[2] && playerChoice === RPS[1] ||
        compChoice === RPS[1] && playerChoice === RPS[0]) {
        roundResult = "Computer Wins the Round!";
        compWinCount++;
    }

    roundCount++;

    updateDOMValues();

    gameEndCheck();
}

function updateDOMValues() {
    // Update Result of Round
    roundResTxt.textContent = `Round ${roundCount}\n${roundResult}`;

    // Update Scores
    playerScoreTxt.textContent = `Player: ${playerWinCount}`;
    compScoreTxt.textContent = `Computer: ${compWinCount}`;
}

function gameEndCheck() {
    if (playerWinCount === 5 || compWinCount === 5) {
        roundResTxt.textContent =
            `${playerWinCount > compWinCount ? "Player" : "Computer"} Wins the GAME!`;

        // End the Game
        displayEndGameBtns();
    }
}

function displayEndGameBtns() {
    optRock.style.display = "none";
    optPaper.style.display = "none";
    optScissors.style.display = "none";

    btnRestart.style.display = "block";
}

// Event Listeners
optRock.addEventListener('click', () => {
    playRound(RPS[0], getComputerChoice());
});

optPaper.addEventListener('click', () => {
    playRound(RPS[1], getComputerChoice());
});

optScissors.addEventListener('click', () => {
    playRound(RPS[2], getComputerChoice());
});

btnRestart.addEventListener('click', () => {
    // Reload the Page to Restart the Game
    location.reload();
});
