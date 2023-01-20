'use strict';
//Selecting Elements
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const btns = document.querySelectorAll('.btn');
const dialog = document.querySelector('.dialog');
const score0El = document.querySelector('.score--0');
const score1El = document.querySelector('.score--1');
const winner = document.querySelector('.winner');
const btnAgain = document.querySelector('.again');
// variables to be invoked later by the game() function to keep track of scores
let playerScore = 0;
let computerScore = 0;
let playerInput = '';

rock.addEventListener('click', function () {
  //   console.log('rock');
  return (playerInput = 'rock');
});
paper.addEventListener('click', function () {
  //   console.log('paper');
  return (playerInput = 'paper');
});
scissors.addEventListener('click', function () {
  //   console.log('scissors');
  return (playerInput = 'scissors');
});

//function to get player input from click
// function getPlayerChoice() {}
// console.log(getPlayerChoice());
// function to get random value for computer
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return 'rock';
  } else if (computerChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// function to return string every time round is played depending on result of user/comp input (invoked in game() function)
function playRound(playerSelection, computerSelection) {
  //
  playerSelection = playerInput;
  computerSelection = getComputerChoice();

  if (playerSelection === 'rock' && computerSelection === 'rock') {
    dialog.textContent = 'Rock vs. Rock. Tie Game!';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore += 1;
    dialog.textContent = 'You lose! Paper beats Rock.';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore += 1;
    dialog.textContent = 'You win! Rock beats Scissors.';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore += 1;
    dialog.textContent = 'You win! Paper beats Rock.';
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    dialog.textContent = 'Paper vs. Paper. Tie Game!';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore += 1;
    dialog.textContent = 'You lose! Scissors beats Paper.';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore += 1;
    dialog.textContent = 'You lose! Rock beats Scissors.';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore += 1;
    dialog.textContent = 'You win! Scissors beats paper.';
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'scissors'
  ) {
    dialog.textContent = 'Scissors vs. Scissors. Tie Game!';
  } else {
    dialog.textContent = 'Invalid Option! Please pick Rock, Paper or Scissors.';
  }
  //update scores
  score0El.textContent = playerScore;
  score1El.textContent = computerScore;
  game();
}

// function to increase user or computer score by 1 depending on result of comp/user input
function whoWon(playerSelection, computerSelection) {
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore += 1;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    computerScore += 1;
  }
}

// most important function - runs loop to increment and keep track of scores and executes all other functions as prompt is entered to return a new value for scores, and a string to show the events of the round
function game() {
  if (playerScore >= 5) {
    score0El.textContent = 5;
    console.log(`Player Wins! (${playerScore}) vs. (${computerScore}).`);
    winner.textContent = `Player Wins! (${playerScore}) vs. (${computerScore}).`;
    // playerScore = 0;
    // computerScore = 0;
    btnAgain.classList.remove('hidden');
    return;
  } else if (computerScore >= 5) {
    score1El.textContent = 5;
    console.log(`Computer Wins! (${computerScore}) vs. (${playerScore}).`);
    winner.textContent = `Computer Wins! (${computerScore}) vs. (${playerScore}).`;
    // playerScore = 0;
    // computerScore = 0;
    btnAgain.classList.remove('hidden');
    return;
  }
}

//Loop to get queryselectorAll - playround applies to all 3
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', playRound);
}

btnAgain.addEventListener('click', function () {
  playerScore = 0;
  computerScore = 0;
  dialog.textContent = '';
  winner.textContent = '';
  score0El.textContent = 0;
  score1El.textContent = 0;
  btnAgain.classList.toggle('hidden');
});
