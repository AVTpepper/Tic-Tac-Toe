let boxes = Array.from(document.getElementsByClassName("box"))
let resetBtn = document.getElementsByClassName("reset")
let newGame = document.getElementsByClassName("new-game")
let help = document.getElementsByClassName("help")

console.log(boxes)

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)

console.log(spaces)




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