const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""]
    return { board }
})();

console.log(gameBoard.board[1])

const gridBox = document.querySelectorAll('.grid-box');
for (let i = 0; i < gridBox.length; i++) {
    console.log(i)
    gridBox[i].textContent = gameBoard.board[i];
}