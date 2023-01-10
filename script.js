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

let playerScore = 0;
let computerScore = 0;
// function to play game uses all options
function playRound(playerSelection, computerSelection) {
    playerSelection = playerChoice; // use parameter playerSelection to get results from prompt
    computerSelection = getComputerChoice(); // use parameter computerSelection to get result from computer

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Rock vs. Rock. Tie Game!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        return 'You lose! Paper beats Rock.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        return 'You win! Rock beats Scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        return 'You win! Paper beats Rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Paper vs. Paper. Tie Game!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        return 'You lose! Scissors beats Paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        return 'You lose! Rock beats Scissors.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        return 'You win! Scissors beats paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Scissors vs. Scissors. Tie Game!';
    } else {
        return "Invalid Option! Please pick Rock, Paper or Scissors.";
    }
}


console.log(playRound()); // test function expression


console.log(playerScore);
console.log(computerScore);

// function game() {
//     for (playerScore <= 5; playerScore++)
// }

for (playerScore; playerScore <= 5; playerScore++) {
    playerSelection;
}

if (playerScore === 5 || 6) {
    playerScore = 0;
    console.log('Player Wins!')
} else if (computerScore === 5) {
    console.log('Computer Wins!')
}

console.log(`Player ${playerScore} Computer ${computerScore}`);