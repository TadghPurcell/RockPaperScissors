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
const playerButtons = document.querySelector('.player-selection');
// variables to be invoked later by the game() function to keep track of scores
let playerScore, computerScore, playerInput, playing;

const init = function () {
  playing = true;
  playerScore = 0;
  computerScore = 0;
  dialog.textContent = 'Start Game...';
  winner.textContent = '';
  score0El.textContent = 0;
  score1El.textContent = 0;
  rock.classList.remove('hidden');
  paper.classList.remove('hidden');
  scissors.classList.remove('hidden');
  btnAgain.classList.add('hidden');
};
init();

function updatePlayerInput() {
  if (playing) {
    return (playerInput = this.textContent);
  } else {
    return (playerInput = '');
  }
}

rock.addEventListener('click', updatePlayerInput);
paper.addEventListener('click', updatePlayerInput);
scissors.addEventListener('click', updatePlayerInput);

function playerIcon() {
  if (playerInput === 'Rock') {
  }
}

//function to get player input from click
// function getPlayerChoice() {}
// console.log(getPlayerChoice());
// function to get random value for computer
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return 'Rock';
  } else if (computerChoice === 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

// function to return string every time round is played depending on result of user/comp input (invoked in game() function)
function playRound(playerSelection, computerSelection) {
  //
  playerSelection = playerInput;
  computerSelection = getComputerChoice();

  if (playerSelection === 'Rock' && computerSelection === 'Rock') {
    dialog.textContent = 'Rock vs. Rock. Tie Game!';
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    computerScore += 1;
    dialog.textContent = 'You lose! Paper beats Rock.';
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    playerScore += 1;
    dialog.textContent = 'You win! Rock beats Scissors.';
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    playerScore += 1;
    dialog.textContent = 'You win! Paper beats Rock.';
  } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
    dialog.textContent = 'Paper vs. Paper. Tie Game!';
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    computerScore += 1;
    dialog.textContent = 'You lose! Scissors beats Paper.';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    computerScore += 1;
    dialog.textContent = 'You lose! Rock beats Scissors.';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerScore += 1;
    dialog.textContent = 'You win! Scissors beats paper.';
  } else if (
    playerSelection === 'Scissors' &&
    computerSelection === 'Scissors'
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
  if (playerScore >= 5 || computerScore >= 5) {
    dialog.textContent = 'Game over!';
    rock.classList.add('hidden');
    paper.classList.add('hidden');
    scissors.classList.add('hidden');
    btnAgain.classList.remove('hidden');
    playerScore >= 5
      ? (winner.textContent = `Player Wins! (${playerScore}) vs. (${computerScore}).`)
      : (winner.textContent = `Computer Wins! (${computerScore}) vs. (${playerScore}).`);
    playing = false;
    return;
  }
}

//Loop to get queryselectorAll - playround applies to all 3
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', playRound);
}

btnAgain.addEventListener('click', init);
