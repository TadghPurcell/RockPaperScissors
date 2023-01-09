'use strict'
const playerSelection = prompt("Pick you choice: Rock, Paper or Scissors");
const playerChoice = playerSelection.toUpperCase(0);

console.log(playerSelection);
console.log(playerChoice);

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoice());

const computerSelection = getComputerChoice();
const playRound = function (playerSelection, computerSelection) {

}
