let boxes = Array.from(document.getElementsByClassName("box"))
let resetBtn = document.getElementById("reset")
let newGame = document.getElementsById("new-game")
let help = document.getElementsById("help")

console.log(boxes)


const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);



const startGame = () => {
    boxes.forEach(box => box.addEventListener("click", clickedBox))
}

function clickedBox(event) {
    console.log(event.target)
    const id = event.target.id

    if(!spaces[id]) {
        spaces[id] = currentPlayer
        event.target.innerText = currentPlayer

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT: X_TEXT
    } 
}


resetBtn.addEventListener("click", resetBoard)

function resetBoard() {
    spaces.fill(null)

    boxes.forEach (box => {
        box.innerText= ""
    })

    currentPlayer = X_TEXT
}

startGame() 



/* 
const boxes = document.getElementsByClassName("box");
const reset = document.getElementsByClassName("reset");
const newGame = document.getElementsByClassName("new-game");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

element.addEventListener("click", myFunction);

function myFunction() {
    this.textContent ="X";
}

*/
/*
document.addEventListener("DOMContentLoaded", function() {
    let boxes = document.getElementsByClassName("box");

    for (let box of boxes) {
        box.addEventListener("click", function() {
            
        
        })

    }

})

function runGame () {

}

function checkWinner() {

}

function checkTurn() {

}

function incrementScore() {

}

function displayX() {

}

function displayO() {

} */