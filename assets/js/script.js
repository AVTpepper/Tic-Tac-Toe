
/* second try below with help from mentor

let boxes = Array.from(document.getElementsByClassName("box"));
let resetBtn = document.getElementById("reset");
let newGame = document.getElementById("new-game");
let help = document.getElementById("help");


const gridSize = 3;
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);




const startGame = () => {
    //boxes.forEach(box => box.addEventListener("click", clickedBox));
    let gameBoard = document.getElementsByClassName("game-board");
    const boxes = Array(gridSize * gridSize).forEach(index => {
        return `<div class="box" id=${index}></div>`
    })
    gameBoard.appendChild(boxes)
}

function clickedBox(event) {
    console.log(event.target);
    const id = event.target.id;

    if(!spaces[id -1]) {
        spaces[id -1] = currentPlayer;
        event.target.innerText = currentPlayer;

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    } 
}


function reset() {
    console.log(spaces)
    spaces.fill(null)
    console.log(spaces)
    boxes.forEach( box => {
        box.innerText = ""
    })
    currentPlayer = X_TEXT
}

resetBtn.addEventListener("click", reset)



startGame() 

- second try above ^ with help from mentor */ 

/* - original try below

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