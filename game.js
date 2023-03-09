// gameboard module that is being returned
const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', '']
    return { board }
})();

// player factorial function
const Players = (player, sign) => {
    const getName = () => player;
    const getSign = () => sign;
    return { player, sign, getName, getSign }
}

const gameController = (() => {
    const playerfirst = Players('hehe', "x");
    const playersecond = Players('hehe', "o");
    let playerTurn = 0;
    let gameHistory = ["", "", "", "", "", "", "", "", ""];
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
    // game factory function 
    const Game = (grid, playerOne, playerTwo) => {
        // put x or o on display
        const turn = () => {

            let nGrid = grid.getAttribute('value')
            if (grid.textContent === "") {
                if (playerTurn % 2 == 0) {
                    grid.textContent = playerOne.sign;
                    playerTurn++;
                    gameHistory[nGrid] = playerOne.sign;

                } else if (playerTurn % 2 != 0) {
                    grid.textContent = playerTwo.sign;
                    playerTurn++;
                    gameHistory[nGrid] = playerTwo.sign;

                }
                checkWinner();  
                if (playerTurn == 9) {
                    console.log("tie")
                }
            }
        }
        return { turn }
    }
    // game board display
    const gridBox = document.querySelectorAll('.grid-box');
    for (let i = 0; i < gridBox.length; i++) {
        gridBox[i].textContent = gameBoard.board[i];
        gridBox[i].setAttribute('value', i)
        game = Game(gridBox[i], playerfirst, playersecond)
        gridBox[i].addEventListener('click', game.turn)
    }
    // 
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
})()
