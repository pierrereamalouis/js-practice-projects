import { startConfetti, stopConfetti, removeConfetti } from './confetti.js';

const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const [playerRock, playerPaper, playerScissors, playerLizard, playerSpock] = document.querySelectorAll('#playerRock, #playerPaper, #playerScissors, #playerLizard, #playerSpock');

const [computerRock, computerPaper, computerScissors, computerLizard, computerSpock] = document.querySelectorAll('#computerRock, #computerPaper, #computerScissors, #computerLizard, #computerSpock');

const allGameIcons = document.querySelectorAll('.far');

const computerChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const [randMin, randMax] = [0, 5];

let computerChoice = '';
let playerScore = 0;
let computerScore = 0;

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'], playerEl: playerRock, computerEl: computerRock },
  paper: { name: 'Paper', defeats: ['rock', 'spock'], playerEl: playerPaper, computerEl: computerPaper },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'], playerEl: playerScissors, computerEl: computerScissors },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'], playerEl: playerLizard, computerEl: computerLizard },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'], playerEl: playerSpock, computerEl: computerSpock },
};

// Reset all 'selected' icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });

  stopConfetti();
  removeConfetti();
}

// Random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.floor(Math.random() * (randMax - randMin) + randMin);
  computerChoice = computerChoices[computerChoiceNumber];
  computerSelect(computerChoice);
}

// Check result, increase scores, update resultText
function updateScore(playerChoice) {
  resultText.textContent = '';
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie.";
    return;
  }

  const choice = choices[playerChoice];
  if (choice.defeats.includes(computerChoice)) {
    startConfetti();
    resultText.textContent = 'You won!';
    playerScoreEl.textContent = ++playerScore;
  } else {
    resultText.textContent = 'You lost.';
    computerScoreEl.textContent = ++computerScore;
  }
}

// Call functions to process turn
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  updateScore(playerChoice);
}

// Passing player slection value and style icons
function select(playerChoice) {
  checkResult(playerChoice);
  // Add 'selected; styling & update playerChoice --- Player
  choices[playerChoice].playerEl.classList.add('selected');
  playerChoiceEl.textContent = ` --- ${choices[playerChoice].name}`;
}

function computerSelect(computerChoice) {
  // Add 'selected; styling & update computerChoice --- Computer
  choices[computerChoice].computerEl.classList.add('selected');
  computerChoiceEl.textContent = ` --- ${choices[computerChoice].name}`;
}

// Restart the game
function restartGame() {
  computerChoice = '';
  playerScore = 0;
  computerScore = 0;
  resultText.textContent = 'Good Luck!';
  playerScoreEl.textContent = '0';
  computerScoreEl.textContent = '0';
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resetSelected();
}

window.select = select;
window.restartGame = restartGame;

startConfetti();
