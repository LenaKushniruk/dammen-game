document.getElementById('startButton').addEventListener('click', startTimer);

function startTimer() {
    const timerDisplay = document.getElementById('timer');
    let timeInSeconds = 12 * 60; // 12 minutes in seconds

    const interval = setInterval(() => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;

        // Update the timer display
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timeInSeconds <= 0) {
            clearInterval(interval);
            alert('Tijd is om!');
        }

        timeInSeconds--;
    }, 1000);
}

// Select elements
const chessboard = document.querySelector('table');
const redPieces = document.querySelectorAll('.red-piece');
const blackPieces = document.querySelectorAll('.black-piece');
const cells = document.querySelectorAll('td');

let turn = true; // True = Red's turn, False = Black's turn

// Add click event to cells
cells.forEach((cell) => {
    cell.addEventListener('click', () => handleCellClick(cell));
});

// Handle cell click
function handleCellClick(cell) {
    const selectedPiece = document.querySelector('.red-piece--selected, .black-piece--selected');
    if (!selectedPiece) {
        console.log('Geen stuk geselecteerd');
        return;
    }

    const { row, col } = getCellPosition(cell);
    console.log(`Cell clicked: Row ${row}, Column ${col}`);

    movePiece(selectedPiece, cell);
}

// Get cell position (row and column)
function getCellPosition(cell) {
    const row = cell.parentElement.rowIndex;
    const col = cell.cellIndex;
    return { row, col };
}

// Move piece to target cell
function movePiece(piece, targetCell) {
    if (targetCell.children.length === 0) { // Only move if cell is empty
        targetCell.appendChild(piece);
        console.log(`Piece moved to Row ${targetCell.parentElement.rowIndex}, Column ${targetCell.cellIndex}`);
        toggleTurn();
    } else {
        console.log('Cell is not empty. Move not allowed.');
    }
}

// Toggle turns
function toggleTurn() {
    turn = !turn;
    console.log(turn ? 'Reds turn' : 'Blacks turn');
}

// Add click events to pieces
redPieces.forEach((piece) => {
    piece.addEventListener('click', () => selectPiece(piece, 'red'));
});

blackPieces.forEach((piece) => {
    piece.addEventListener('click', () => selectPiece(piece, 'black'));
});

// Select piece
function selectPiece(piece, color) {
    // Deselect all pieces of the same color
    const allPieces = color === 'red' ? redPieces : blackPieces;
    allPieces.forEach((p) => p.classList.remove(`${color}-piece--selected`));

    // Select the clicked piece
    piece.classList.add(`${color}-piece--selected`);
    console.log(`${color.charAt(0).toUpperCase() + color.slice(1)} piece selected`);

}

