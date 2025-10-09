const startBtn = document.getElementById("submit");
let board;
let player1, player2;
let currentPlayer;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();

    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;

    currentPlayer = String(player1);

    document.getElementsByClassName('input-container')[0].style.display = 'none';
    document.getElementsByClassName('game-container')[0].style.display = 'block';

    document.getElementsByClassName('message')[0].textContent = `${currentPlayer}, you're up`;

    createGrid();
});

function createGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    board = Array(9).fill(null);

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('id', i + 1);
        cell.setAttribute('style', "background-color: pink;");
        cell.addEventListener('click', handleCellClick);
        grid.appendChild(cell);
    }
}

function handleCellClick(event) {
    const index = parseInt(event.target.getAttribute('id')) - 1;
    if(board[index]) return;

    board[index] = (currentPlayer === player1) ? 'x' : 'o';
    event.target.textContent = board[index];

    if(checkWinner()) 
    {
        document.getElementsByClassName('message')[0].textContent = `${currentPlayer}, congratulations you won!`;
        document.getElementsByClassName('message')[0].style.display = 'block';
        return;
    }

    // Switch turn
    currentPlayer = (currentPlayer === player1) ? player2 : player1;
    document.getElementsByClassName('message')[0].textContent = `${currentPlayer}, you're up`;
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        if(board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById(a+1).style.backgroundColor = "purple";
            document.getElementById(b+1).style.backgroundColor = "purple";
            document.getElementById(c+1).style.backgroundColor = "purple";
            return true;
        }
        return false;
    });
}