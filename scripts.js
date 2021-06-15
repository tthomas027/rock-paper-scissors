
function computerPlay() {
    move = Math.floor(Math.random() * 3);

    if (move === 0) {
        return 'rock';
    } else if (move === 1) {
        return 'paper';
    }

    return 'scissors';

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie'
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'win';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'win';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'win';
    }

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'loss'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'loss'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'loss'
    }
}

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  let computerSelection = computerPlay();
  let round = playRound('rock', computerSelection);

  displayResult(round, 'rock', computerSelection);
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  let computerSelection = computerPlay();
  let round = playRound('paper', computerSelection);

  displayResult(round, 'paper', computerSelection);
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  let computerSelection = computerPlay();
  let round = playRound('scissors', computerSelection);

  displayResult(round, 'scissors', computerSelection);
});

function updateScore() {
  const playerScoreDiv = document.querySelector('#playerscore');
  const computerScoreDiv = document.querySelector('#computerscore');

  playerScoreDiv.textContent = 'Player: ' + playerScore;
  computerScoreDiv.textContent = 'Computer: ' + computerScore;
}

function displayResult(round, playerSelection, computerSelection) {
  const result = document.querySelector('#result');
  if (round === 'tie') {
    result.textContent = "It's a tie!";
  } else if (round === 'win') {
    playerScore++;
    result.textContent = 'Player wins the round! ' + capitalize(playerSelection) + ' beats' + ' ' + capitalize(computerSelection);
  } else {
    computerScore++;
    result.textContent = 'Computer wins the round! ' + capitalize(playerSelection) + ' beats' + ' ' + capitalize(computerSelection);
  }
}

function capitalize(string) {
  return string[0].toUpperCase() + string.substring(1);
}

window.addEventListener('click', updateScore);