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

// compare computer move vs player move to see if winner or tie
function playRound(playerSelection, computerSelection) {
    // make sure playerSelection is lowercase
    playerSelection = playerSelection.toLowerCase();
    // check if playerSelection equals computerSelection
    if (playerSelection === computerSelection) {
        return 'tie'
    }
    // check if playerSelection beats computerSelection
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'win';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'win';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'win';
    }
    // check if computerSelection beats playerSelection
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'loss'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'loss'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'loss'
    }
}

function game() {
    // keep track of score
    let playerWins = 0;
    let computerWins = 0;

    // play 5 round game
    for (let x = 0; x < 5; x++) {

        // get computer move
        const computerSelection = computerPlay();

        // play the round and display result
        let round = playRound(playerSelection, computerSelection);
        if (round === 'tie') {
            console.log("It's a tie!")
        } else if (round === 'win') {
            playerWins++;
            console.log('You Win! ' + capitalize(playerSelection) + ' beats' + ' ' + capitalize(computerSelection));
        } else {
            computerWins++;
            console.log('You Lose! '  + capitalize(playerSelection) + ' beats' + ' ' + capitalize(computerSelection));
        }
    }

    // display final score
    console.log('Final Score: Player ' + playerWins + ' Computer ' + computerWins);
    // determine winner
    if (playerWins > computerWins) {
        console.log('Player Wins!');
    } else if (computerWins > playerWins) {
        console.log('Computer Wins!');
    } else {
        console.log('Final Score is a Tie!');
    }

}

function isValidSelection(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    return playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors';
}

function capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  console.log(playRound('rock', computerPlay()));
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  console.log(playRound('paper', computerPlay()));
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  console.log(playRound('scissors', computerPlay()));
});