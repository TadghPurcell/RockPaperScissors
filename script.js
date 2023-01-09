'use strict'
const playerSelection = prompt("Pick you choice: Rock, Paper or Scissors"); // initial prompt
const playerChoice = playerSelection.toLowerCase(0); // converts prompt to lower case to make insensitive

console.log(playerSelection); // test variable
console.log(playerChoice); // test variable

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

console.log(getComputerChoice()); //test function

const computerSelection = getComputerChoice(); // variable made to use in argument for paremeter

// function to play game uses all options
function playRound(playerSelection, computerSelection) {
    playerSelection = playerChoice; // use parameter playerSelection to get results from prompt
    computerSelection = getComputerChoice(); // use parameter computerSelection to get result from computer

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

// function to break down playRound returns into 2 options
function whoWon() {
    if (playRound(playerChoice, computerSelection) === 'You win! Rock beats Scissors.' ||
        'You win! Paper beats Rock.' || 'You win! Scissors beats paper.') {
        return 'player wins';
    } else if (playRound(playerChoice, computerSelection) === 'You lose! Paper beats Rock.' ||
        'You lose! Scissors beats Paper.' || 'You lose! Rock beats Scissors.') {
        return 'computer wins';
    }
}

console.log(whoWon());

console.log(playRound()); // test function expression

const playGame = playRound();
let playerScore = 0;
let computerScore = 0;

function game(round) {
    if (round === 'player wins') {
        playerScore += playerScore + 1;
    } else if (round === 'computer wins') {
        computerScore += computerScore + 1;
    }
    return console.log(playerScore, computerScore);
}
game(playGame);
console.log(playerScore);
console.log(computerScore)

if (playerScore === 5) {
    console.log('Player Wins!')
} else if (computerScore === 5) {
    console.log('Computer Wins!')
}

console.log(`Player ${playerScore} Computer ${computerScore}`);