'use strict'
let playerSelection = prompt("Pick you choice: Rock, Paper or Scissors"); // initial prompt
let playerChoice = playerSelection.toLowerCase(0); // converts prompt to lower case to make insensitive
let playerScore = 0;
let computerScore = 0;


// console.log(playerSelection); // test variable
// console.log(playerChoice); // test variable

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

function playRound() {
    // playerSelection // use parameter playerSelection to get results from prompt
    // computerSelection // use parameter computerSelection to get result from computer

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

function whoWon() {
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
    }
}


// console.log(playRound()); // test function expression
// console.log(whoWon());


console.log(playerScore);
console.log(computerScore);

function game() {
    for (playerScore, computerScore; playerScore <= 4, computerScore <= 4;) {
        playerSelection = prompt("Pick you choice: Rock, Paper or Scissors");
        playerChoice
        whoWon();
        console.log(playerScore);
        console.log(computerScore); // if don't have increments it will never stop increasing
        console.log(playRound());
    }

}


game();


if (playerScore >= 5) {
    playerScore = 0;
    computerScore = 0;
    console.log('Player Wins!')
} else if (computerScore >= 5) {
    playerScore = 0;
    computerScore = 0;;
    console.log('Computer Wins!')
}