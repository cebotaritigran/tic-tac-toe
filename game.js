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

const gameController = (() => {
    const playerfirst = Players('hehe', "x");
    const playersecond = Players('hehe', "o");
    let playerTurn = 0;
    // game factory function 
    const Game = (grid, playerOne, playerTwo) => {
        const winningCombos = () => {
            const combos = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ];
        }
        // put x or o on display
        const turn = () => {
            if (grid.textContent === "") {
                if (playerTurn % 2 == 0) {
                    grid.textContent = playerOne.sign;
                    playerTurn++;
                    console.log(playerTurn)
                } else if (playerTurn % 2 != 0) {
                    grid.textContent = playerTwo.sign;
                    playerTurn++;
                }
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
})()
