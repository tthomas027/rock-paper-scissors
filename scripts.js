// randomly choose rock, paper or scissors for computer move
function computerPlay() {
    // randomly choose number between 0-2
    move = Math.floor(Math.random() * 3);
    // if move equals 0 return Rock
    if (move === 0) {
        return 'Rock';
    // if move equals 1 return Paper
    } else if (move === 1) {
        return 'Paper';
    }
    // otherwise return 'Scissors'
    return 'Scissors';

}

// ask user for their move
// compare computer move vs player move to see if winner or tie
// declare outcome of round
// keep track of wins