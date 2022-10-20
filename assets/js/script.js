// vairables used throughout the game
let player1 = "x";
let player2 = "o";
let gameState1 = [];
let gameState2 = [];
const gridSize = 9;
let gameOver = false;
let counter = 0;
let points1 = 0;
let points2 = 0;

// creates a div for the html file
const gameBoard = document.createElement("div");
gameBoard.classList.add("game-board");
gameBoard.setAttribute("id", "game");
document.body.appendChild(gameBoard);

// creates each square on the game board
function createBoard() {
  for (x = 0; x < gridSize; x++) {
    const square = document.createElement("div")
    square.className = "square"
    square.id = x + 1;
    gameBoard.appendChild(square)
  }
}

createBoard();

const buttonGroup = document.getElementById("game");

const buttonGroupPressed = e => {

  let eachSquare = document.getElementsByClassName("square");

  for (x = 0; x < eachSquare.length; x++) {
    // for this loop I got guidance from GitHub user devinardya 
    if (eachSquare[x].id === e.target.id) {
      if (eachSquare[x].textContent === "" && gameOver === false) {
        if (isEven(counter)) {
          console.log("this in number", x)
          eachSquare[x].innerHTML = player1;
          gameState1.push(e.target.id)
          console.log("current score", gameState1);
          checkWinner(gameState1, gameState2);
          counter++
        } else {
          console.log("this in number", x)
          eachSquare[x].innerHTML = player2;
          gameState2.push(e.target.id)
          console.log("current score", gameState2);
          checkWinner(gameState1, gameState2);
          counter++
        }
      }
    }
  }
}
// I also received guidance from GitHub user in creating the checkWinner function, specifically with the loop.
function checkWinner(input1, input2) {

  let arrX = input1;
  let arrO = input2;

  // all the winning combinations.
  let winningComb = ["123", "456", "789", "147", "369", "357", "159", "258"];

  // looping through the winning combination array.
  for (let k = 0; k < winningComb.length; k++) {
    let numArr = winningComb[k].split("");


    let num1 = numArr[0]; // first winning number
    let num2 = numArr[1]; // second winning number
    let num3 = numArr[2]; // third winning number

    // check if Player One is the winner.
    // check to see if the indexes clicked match up with any of the winning combinations.
    if (arrX.indexOf(num1) !== -1 && arrX.indexOf(num2) !== -1 && arrX.indexOf(num3) !== -1) {
      document.getElementById("result").innerHTML = "Player 'X' wins!"
      points1++;
      document.getElementById("player-1").innerHTML = points1;
      gameOver = true;

    }
    // check if Player Two is the winner.
    // check to see if the indexes clicked match up with any of the winning combinations.
    if (arrO.indexOf(num1) !== -1 && arrO.indexOf(num2) !== -1 && arrO.indexOf(num3) !== -1) {
      document.getElementById("result").innerHTML = "Player 'O' wins!"
      points2++;
      document.getElementById("player-2").innerHTML = points2;
      gameOver = true;

    }
  };
  // if neither player wins and the board is full then this if statement is true.
  if (counter === 8 && gameOver !== true) {
    document.getElementById("result").innerHTML = "It's a draw!";
    gameOver = true;
  }
};

function isEven(n) {
  return n % 2 == 0;
};

buttonGroup.addEventListener("click", buttonGroupPressed);

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", clearBoard);

function clearBoard() {
  gameState1 = [];
  gameState2 = [];
  counter = 0
  gameOver = false;
  document.getElementById("result").innerHTML = "";
  var square = document.getElementsByClassName("square");
  for (var i = 0; i < square.length; i++) {
    square[i].textContent = "";
  }
};

const resetScoreBtn = document.getElementById("reset-score")
resetScoreBtn.addEventListener("click", resetScore)

function resetScore() {
  clearBoard()
  points1 = document.getElementById("player-1").textContent = "0";
  points2 = document.getElementById("player-2").textContent = "0";
  points1 = 0;
  points2 = 0;
};