// gameboard module that is being returned
const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', '']
    return { board }
})();

// players factory function to create players
const Players = (player, sign) => {
    const getName = () => player;
    const getSign = () => sign;
    return { player, sign, getName, getSign }
}

// gameController is a module that plays the game on opening of the page
const gameController = (() => {
    const gridBox = document.querySelectorAll('.grid-box');
    const winnerDisplay = document.querySelector('.winner-display')
    const playerfirst = Players('playerOne', "X");
    const playersecond = Players('playerTwo', "O");

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

    // game function that returns turn function to play the game
    const Game = (grid, playerOne, playerTwo) => {
        // main function where game is played
        // will check if grid is empty and if someone has won
        // if not the players take turns to play via a variable which checks if the turn number is even or odd
        const turn = () => {
            if (grid.textContent === "" && gameEnded == false) {
                if (playerTurn % 2 == 0) {
                    grid.textContent = playerOne.sign;
                    playerTurn++;
                    console.log(playerTurn)
                    checkTie()
                    if (checkWinner() == true) {
                        gameEnded = checkWinner();
                        winnerDisplay.textContent = 'X HAS WON'
                        console.log("X has won")
                    }
                } else if (playerTurn % 2 != 0) {
                    grid.textContent = playerTwo.sign;
                    playerTurn++;
                    console.log(playerTurn)
                    checkTie()
                    if (checkWinner() == true) {
                        gameEnded = checkWinner();
                        winnerDisplay.textContent = 'O HAS WON'
                        console.log("O has won")
                    }
                }
            }
        }
        return { turn }
    }

    // check for ties
    const checkTie = () => {
        if (gameEnded == false && playerTurn == 9) {
            playerTurn = 0;
            gameEnded = true;
            winnerDisplay.textContent = 'TIE'
            console.log("tie")
        }
    }

    // display function that displays new board and adds event listeners to each grid
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
                playerTurn = 0;
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
            playerTurn = 0;
            winnerDisplay.textContent = ''
            displayController();
        })
    }
    return { Game, displayController, resetGame };
})()

gameController.displayController();
// to create event lsitener on reset button on the run 
gameController.resetGame();
