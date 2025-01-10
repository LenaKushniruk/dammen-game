document.getElementById('startButton').addEventListener('click', startTimer);

function startTimer() {
  const timerDisplay = document.getElementById('timer');
  let timeInSeconds = 12 * 60; // 12 minutes in seconds

  const interval = setInterval(() => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    // Update the timer display
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Stop the timer when it reaches 0
    if (timeInSeconds <= 0) {
      clearInterval(interval);
      alert('Tijd is om!');
    }

    timeInSeconds--;
  }, 1000);
}


const chessboard = document.getElementsByTagName("table");
console.log(chessboard);

const redPieces = document.getElementsByClassName("red-piece");
console.log(redPieces);

const blackPieces = document.getElementsByClassName("black-piece");
console.log(blackPieces);

const cells = document.getElementsByTagName('td')

let turn = true;

for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = function() {
        const selectedpiece = document.querySelector(".red-piece--selected, .black-piece--selected");
        if (!selectedpiece) {
            console.log("Geen stuck geselecteerd")
            return
        }
    }
}

function getCellPosition(cell){
    const row = cell.parentElement.rowIndex;
    col = cell.cellIndex
    return { row, col };
}

function movePiece(piece, targetCell) {
    targetCell.appendChild(piece)
    console.log(`Piece moved to ${targetCell.parentElement.rowIndex}, column ${targetCell.cellIndex}`)
}


for (let i = 0; i < redPieces.length; i++) {
    redPieces[i].onclick = function () {
        for (let j = 0; j < redPieces.length; j++) {
            redPieces[j].classList.remove("red-piece--selected");
        }
        this.classList.add("red-piece--selected");
        console.log("Red piece clicked and selected");
    };
}

for (let i = 0; i < blackPieces.length; i++) {
    blackPieces[i].onclick = function () {
        for (let j = 0; j < blackPieces.length; j++) {
            blackPieces[j].classList.remove("red-piece--selected");
        }
        this.classList.add("red-piece--selected");
        console.log("black piece clicked and selected");
    };
}

AllPieces = e.target()

MovingPieces()
