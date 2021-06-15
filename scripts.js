
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

function didPlayerWin(result) {
  if (result === 'tie') return;
  
  return result === 'win';
}


let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  let result = didPlayerWin(playRound('rock', computerPlay()));

  if (result !== undefined && result) {
    playerScore++;
  } else if (result !== undefined && !result) {
    computerScore++;
  }
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  let result = didPlayerWin(playRound('paper', computerPlay()));

  if (result !== undefined && result) {
    playerScore++;
  } else if (result !== undefined && !result) {
    computerScore++;
  }
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  let result = didPlayerWin(playRound('scissors', computerPlay()));

  if (result !== undefined && result) {
    playerScore++;
  } else if (result !== undefined && !result) {
    computerScore++;
  }
});

function updateScore() {
  const playerScoreDiv = document.querySelector('#playerscore');
  const computerScoreDiv = document.querySelector('#computerscore');

  playerScoreDiv.textContent = 'Player: ' + playerScore;
  computerScoreDiv.textContent = 'Computer: ' + computerScore;
}

window.addEventListener('click', updateScore);