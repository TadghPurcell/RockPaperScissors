'use strict'
// variables to be invoked later by the game() function to keep track of scores
let playerScore = 0;
let computerScore = 0;

// function to get random value for computer
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// function to return string every time round is played depending on result of user/comp input (invoked in game() function)
function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Rock vs. Rock. Tie Game!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats Rock.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Paper vs. Paper. Tie Game!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats Paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats Scissors.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Scissors vs. Scissors. Tie Game!';
    } else {
        return "Invalid Option! Please pick Rock, Paper or Scissors.";
    }
}

// function to increase user or computer score by 1 depending on result of comp/user input
function whoWon(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
    }
}

// most important function - runs loop to increment and keep track of scores and executes all other functions as prompt is entered to return a new value for scores, and a string to show the events of the round
function game() {
    for (playerScore, computerScore; playerScore <= 4, computerScore <= 4;) {
        let playerChoice = prompt("Pick you choice: Rock, Paper or Scissors");
        let playerSelection = playerChoice.toLowerCase(0);
        let computerSelection = getComputerChoice();
        computerSelection
        playerSelection;
        whoWon(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player Score (${playerScore}) vs. Computer Score (${computerScore}).`);
        if (playerScore >= 5) {
            console.log(`Player Wins! (${playerScore}) vs. (${computerScore}).`);
            playerScore = 0;
            computerScore = 0;
            return;
        } else if (computerScore >= 5) {
            console.log(`Computer Wins! (${computerScore}) vs. (${playerScore}).`);
            playerScore = 0;
            computerScore = 0;;
            return;
        }
    }

}

// function invoked when start game button click which sets the initial prompt
function buttonClick() {
    let startPrompt = prompt('Start Game? Yes/No')
    let startGame = startPrompt.toLowerCase(0);
    if (startGame === 'yes') {
        alert('Best of luck!');
        game();
    } else if (startGame === 'no') {
        alert('You have no choice');
        game();
    } else {
        alert('Invalid choice. Please enter a correct option.');
    }
}

