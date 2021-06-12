// randomly choose rock, paper or scissors for computer move
function computerPlay() {
    // randomly choose number between 0-2
    move = Math.floor(Math.random() * 3);
    // if move equals 0 return Rock
    if (move === 0) {
        return 'rock';
    // if move equals 1 return Paper
    } else if (move === 1) {
        return 'paper';
    }
    // otherwise return 'Scissors'
    return 'scissors';

}

// ask user for their move

// compare computer move vs player move to see if winner or tie
function playRound(playerSelection, computerSelection) {
    // make sure playerSelection is lowercase
    playerSelection = playerSelection.toLowerCase();
    // check if playerSelection equals computerSelection
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
    // check if playerSelection beats computerSelection
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper'
    }
    // check if computerSelection beats playerSelection
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Paper beats Scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors'
    }
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))
// keep track of wins