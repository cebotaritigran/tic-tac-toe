// gameboard module that is being returned
const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', '']
    return { board }
})();


const Players = (player, sign) => {
    const getName = () => player;
    const getSign = () => sign;
    return { player, sign, getName, getSign }
}

const gameController = (() => {
    const gridBox = document.querySelectorAll('.grid-box');
    const playerfirst = Players('hehe', "x");
    const playersecond = Players('hehe', "o");

    // player turn variable to track if its x's or o's turn
    let playerTurn = 0;
    // gameEneded variable when true can't input anything on grid
    let gameEnded = false;

    // wining combos that check grids
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

    const Game = (grid, playerOne, playerTwo) => {
        // main function where game is played
        // will check if grid is empty and if someone has won
        // if not the players take turns to play via a variable which checks if the turn number is even or odd
        const turn = () => {
            if (grid.textContent === "" && gameEnded == false) {
                if (playerTurn % 2 == 0) {
                    grid.textContent = playerOne.sign;
                    playerTurn++;
                    if (checkWinner() == true) {
                        gameEnded = checkWinner();
                        console.log("X has won")
                    }

                } else if (playerTurn % 2 != 0) {
                    grid.textContent = playerTwo.sign;
                    playerTurn++;

                    if (checkWinner() == true) {
                        gameEnded = checkWinner();
                        console.log("O has won")
                    }
                }
                if (playerTurn == 9) {
                    console.log("tie")
                }
            }
        }
        return { turn }
    }

    const displayController = () => {
        for (let i = 0; i < gridBox.length; i++) {
            gridBox[i].textContent = gameBoard.board[i];
            gridBox[i].setAttribute('value', i)
            game = Game(gridBox[i], playerfirst, playersecond)
            gridBox[i].addEventListener('click', game.turn)
        }
    }

    // checking combinations via checking if all the combinations have same sign and if its same return true
    const checkWinner = () => {
        for (let x = 0; x < gameBoard.board.length; x++) {
            if (
                gridBox[combos[x][0]].textContent == gridBox[combos[x][1]].textContent &&
                gridBox[combos[x][1]].textContent == gridBox[combos[x][2]].textContent &&
                gridBox[combos[x][0]].textContent != ""
            ) {
                console.log(":)")
                return true
            } else {
                false
            }
        }
    }

    // resets the display controller and gameEnded variable
    // in order to play the game again
    const resetGame = () => {
        const resetButton = document.querySelector('.reset-button')
        resetButton.addEventListener('click', () => {
            gameEnded = false;
            displayController();
        })
    }
    return { Game, displayController, resetGame };
})()

gameController.displayController();
gameController.resetGame();
