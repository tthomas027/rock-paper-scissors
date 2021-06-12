// randomly choose rock, paper or scissors for computer move
function computerPlay() {
    // randomly choose number between 0-2
    move = Math.floor(Math.random() * 3);
    return move;
}

// ask user for their move
// compare computer move vs player move to see if winner or tie
// declare outcome of round
// keep track of wins