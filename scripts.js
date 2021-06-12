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
    playSelection = playerSelection.toLowerCase();
    // check if playerSelection equals computerSelection
    // check if playerSelection beats computerSelection
    //check if computerSelection bears playerSelection
}
// declare outcome of round
// keep track of wins