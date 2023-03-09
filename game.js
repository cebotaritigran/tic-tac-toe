// gameboard module that is being returned
const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""]
    return { board }
})();

// player factorial function
const Players = (player, sign) => {
    const getName = () => player;
    const getSign = () => sign;
    return { player, sign, getName, getSign }
}

//asigning 2 players
const playerfirst = Players('hehe', "x");
const playersecond = Players('hehe', "o");

// game factorial function 
const Game = (grid, playerOne, playerTwo) => {
    let playerTurn = true;
    // put x or o on display
    const turn = () => {
        if (playerTurn) {
            grid.textContent = playerOne.sign;
            playerTurn = false
        } else if (playerTurn == false) {
            grid.textContent = playerTwo.sign;
            playerTurn = true
        }
    }
    return { turn }
}

// game board display
const gridBox = document.querySelectorAll('.grid-box');
for (let i = 0; i < gridBox.length; i++) {
    gridBox[i].textContent = gameBoard.board[i];
    game = Game(gridBox[i], playerfirst, playersecond)
    gridBox[i].addEventListener('click', game.turn)
}