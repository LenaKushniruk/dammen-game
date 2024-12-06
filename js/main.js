const chessboard = document.getElementsByTagName("table");
console.log(chessboard);

const redPieces = document.getElementsByClassName("red-piece");
console.log(redPieces);

const blackPieces = document.getElementsByClassName("black-piece");
console.log(blackPieces);

let AllPieces = document.querySelectorAll('td')
console.log(AllPieces);

let turn = true;

function move(newX, newY, posX, posY) {
    var tx = newX - posX;
    var ty = newY - posY;
    var dist = Math.sqrt(tx * tx + ty * ty);
    console.log(`Move distance: ${dist}`);
}

for (let i = 0; i < redPieces.length; i++) {
    redPieces[i].onclick = function() {
        console.log("Red piece clicked");
    };
}

for (let i = 0; i < blackPieces.length; i++) {
    blackPieces[i].onclick = function() {
        console.log("Black piece clicked");
    };
}

AllPieces = e.target()

MovingPieces()
