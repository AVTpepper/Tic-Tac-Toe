let player1 = "x";
let player2 = "o";
let gameState1 = [];
let gameState2 = [];
const gridSize = 9;
let gameOver = false;
let counter = 0;
let points1 = 0;
let points2 = 0;

const gameBoard = document.createElement("div");
gameBoard.classList.add("game-board");
gameBoard.setAttribute("id", "game");
document.body.appendChild(gameBoard);

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

function checkWinner(input1, input2) {

  let arrX = input1;
  let arrO = input2;

  // All the winning combinations.
  let winningComb = ["123", "456", "789", "147", "369", "357", "159", "258"];

  // Looping through the winning combination array.
  for (let k = 0; k < winningComb.length; k++) {
    let numArr = winningComb[k].split("");


    let num1 = numArr[0]; // first winning number
    let num2 = numArr[1]; // second winning number
    let num3 = numArr[2]; // third winning number

    // Check if Player One is the winner.
    // Checks to see if the indexes clicked match up with any of the winning combinations.
    if (arrX.indexOf(num1) !== -1 && arrX.indexOf(num2) !== -1 && arrX.indexOf(num3) !== -1) {
      document.getElementById("result").innerHTML = "Player 'X' wins!"
      points1++;
      document.getElementById("player-1").innerHTML = points1;
      gameOver = true;

    }
    // check if Player Two is the winner.
    //checks to see if the indexes clicked match up with any of the winning combinations.
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
  points1 = document.getElementById("player-1").textContent="0";
  points2 = document.getElementById("player-2").textContent="0";

  points1 = 0;
  points2 = 0;
};

/*let currentPlayer = "x";
let gameState =["","","","","","","","",""];
const gridSize = 9;

function handleClick(clickedSquare, clickedSquareIndex) {
  gameState[clickedSquareIndex] = currentPlayer;
  clickedSquare.innerHTML = currentPlayer;
}
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const gameBoard = document.createElement("div");
gameBoard.classList.add("game-board");
document.body.appendChild(gameBoard);

function createBoard () {
  for(x = 0; x < gridSize; x++) {
     const square = document.createElement("div")
    square.className="square"
    square.id= `box${x}`;
    square.addEventListener("click", handleClick, {
      once: true})
  gameBoard.appendChild(square)
  }
}

createBoard();

function handleSquareClick(clickedSquareEvent) {
  const clickedSquare = clickedSquareEvent.target;
  const clickedCellIndex = parseInt(clickedSquare)
}







/* const playerOne = "x"
const playerTwo = "o"
const GameBoard = document.createElement("div");
const squareElement = document.createElement("div");


const startGame = () => {

}

*/



/* Copied code
const players = ["o", "x"]
const gameBoard = ["","","","","","","","",""]
let currentPlayer;
let gameBoardElem;

const makeGameBoardElem = () => {
  const gameBoardElem = document.createElement("div");
  gameBoardElem.classList.add("game-board");
  return gameBoardElem;
};

const makeSquareElem = squareNumber => {
  const squareElement = document.createElement("div");
  squareElement.classList.add("game-square");
  squareElement.addEventListener("click", (event) => {
    const {target} = event;
    target.textContent =currentPlayer;
    gameBoard[squareNumber] = currentPlayer;
    checkBoard();
    switchPlayer();
  }, {once:true});
  return squareElement;
};

const emptyGameSquare = array.from(document.getElementsByClassName("game-board"));
console.log (emptyGameSquare);

const switchPlayer = () => {
  if (currentPlayer === players[0]) {
        currentPlayer = players [1];
        
       /* const aiTurn = () => {
            //setTimeout(() => {
            const index = Math.floor(Math.random() * boxElements.length)
            const selectedBox = document.getElementById(boxElements[index])
            selectedBox.innerText = "o"
            //}, 1000);

  } else {
    currentPlayer = players[0];
  }
}

const checkBoard = () => {
  // gameBoard
  // ["0", "1", "2"]
  // ["3", "4", "5"]
  // ["6", "7", "8"]
  
  const winningStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  for (let winState of winningStates) {
    const [position1, position2, position3] = winState;
    
    if (
      gameBoard[position1] !== "" && 
      gameBoard[position1] === gameBoard[position2] && 
      gameBoard[position1] === gameBoard[position3]) {
      completeGame(`${gameBoard[position1]} wins!`);
    }
  }
  
  const allSquaresUsed = gameBoard.every(square => square !== "");
  
  if(allSquaresUsed) {
    completeGame(`It's a draw!`);
  }
};

const completeGame = message => {
  const overlayElem = document.createElement("div");
  overlayElem.style.position ="fixed";
  overlayElem.style.top ="0";
  overlayElem.style.left ="0";
  overlayElem.style.bottom ="0";
  overlayElem.style.right ="0";
  overlayElem.style.backgroundColor ="rgba(0,0,0,0.8)";
  overlayElem.style.display ="flex";
  overlayElem.style.flexDirection ="column";
  overlayElem.style.justifyContent ="center";
  overlayElem.style.alignItems ="center";
  overlayElem.style.textAlign ="center";
  
  const messageElem = document.createElement ("h2");
  messageElem.textContent=message;
  messageElem.style.color="white";
  messageElem.style.fontSize="100px";
  
  overlayElem.appendChild(messageElem);
  
  
  const restartButtonElem = document.createElement("button");
  restartButtonElem.textContent="Restart";
  restartButtonElem.style.backgroundColor ="transparent";
  restartButtonElem.style.color ="white";
  restartButtonElem.style.border ="1px solid white";
  restartButtonElem.style.padding ="10px 30px";
  restartButtonElem.style.fontSize ="30px";
  
  restartButtonElem.addEventListener("click", () => {
    resetGame();
    document.body.removeChild(overlayElem);
  });
  overlayElem.appendChild(restartButtonElem);
  
  document.body.appendChild(overlayElem);
  
};



const resetGame = () => {
  if (gameBoardElem) {
    document.body.removeChild(gameBoardElem);
  }
  
  gameBoardElem = makeGameBoardElem();
  for(let square = 0; square < 9; square++) {
    gameBoardElem.appendChild(makeSquareElem(square));
  }
 
  currentPlayer = players[0];
  gameBoard.fill("");
  
  document.body.appendChild(gameBoardElem);
};

resetGame(); */

/* useless
const playerSelection = document.createElement("div");
    playerSelection.classList.add("player-selection-wrap");
    document.body.appendChild(playerSelection);
                                    
const input = document.createElement("INPUT");
    input.type = "radio";
    input.name="player-selection";
    input.classList.add("player-selection");
    input.id="player-1";
    playerSelection.appendChild(input);

const label = document.createElement("label");
    label.innerText = "X";
    label.classList.add("player-text")
    playerSelection.appendChild(label);

const input2 = document.createElement("INPUT");
    input2.type="radio";
    input2.classList.add("player-selection");
    input2.id="player-2";
    input2.name="player-selection";
    playerSelection.appendChild(input2);

const label2 = document.createElement("label");
    label2.innerText="O";
    label2.classList.add("player-text");
    playerSelection.appendChild(label2);

const gameMode = document.createElement("div");
    gameMode.classList.add("game-mode");
    document.body.appendChild(gameMode);
    gameMode.innerText = "hello";

const multiplayer = document.createElement("input");
    multiplayer.type="radio";
    multiplayer.classList.add("multiplayer");
    multiplayer.id="multiplayer";
    multiplayer.name="game-mode";
    gameMode.appendChild(multiplayer);

const multiplayerLabel = document.createElement("label")
    multiplayerLabel.innerText="2 player"
    multiplayerLabel.classList.add("game-mode-text")
    gameMode.appendChild(multiplayerLabel);

const multiplayer2 = document.createElement("input");
    multiplayer2.type="radio";
    multiplayer2.classList.add("multiplayer");
    multiplayer2.id="multiplayer";
    multiplayer2.name="game-mode";
    gameMode.appendChild(multiplayer2);

const multiplayerLabel2 = document.createElement("label")
    multiplayerLabel2.innerText="Computer"
    multiplayerLabel2.classList.add("game-mode-text")
    gameMode.appendChild(multiplayerLabel2); */


/* with help from mentor v2
const gameBoard = document.createElement("div");
gameBoard.classList.add("game-board");
document.body.appendChild(gameBoard);

let gridSize = 9

function buildGrid() {
    for (x = 0; x < gridSize; x++) {
        const boxes = document.createElement("div");
        boxes.className = "box";
        boxes.id = `box${x}`;
        boxes.addEventListener("click", handleClick, {
            once: true
        })
        gameBoard.appendChild(boxes);
    }
}
buildGrid();

let boxElements = Array.from(document.getElementsByClassName("box"), (box) => {
    return box.id
});

console.log(boxElements);

function handleClick(event) {
    console.log("clicked")
    event.target.innerText = "x"
    boxElements = boxElements.filter((box) => {
        return box !== event.target.id
    });
    console.log(boxElements);

    aiTurn();

}
checkBoard();

const aiTurn = () => {
    //setTimeout(() => {
    const index = Math.floor(Math.random() * boxElements.length)
    const selectedBox = document.getElementById(boxElements[index])
    selectedBox.innerText = "o"
    //}, 1000);
}

const checkBoard = () => {
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let winPattern of winningPatterns) {
        const [position1, position2, position3] = winPattern;

        if (
            boxes[position1] !== "" &&
            boxes[position1] === boxes[position2] &&
            boxes[position1] === boxes[position3]) {
            alert(`${boxes[position1]}'s wins!`);
        }
    }

};

*/




/* credit to YouTube creator PortEXE for this code logic
const board = () => Array.from(document.getElementsByClassName("box"));
const boxId = (boxEl) => Number.parseInt(boxEl.id);
const emptyBoxes = () => board().filter(_boxEl => _boxEl.innerText === "");
const allSame = (arr) => arr.every(_boxEl => _boxEl.innerText === arr[0].innerText && _boxEl.innerText !=="");


const takeTurn = (index, letter) => board()[index].innerText = letter;
const opponentChoice = () => boxId(emptyBoxes()[Math.floor(Math.random() * emptyBoxes.length)]);

const aiTurn = () => {
    disableListeners();
    setTimeout(() => {
        takeTurn(opponentChoice(), "o");
        enableListeners();
    }, 1000);
}

const clicks = ($event) => {
    takeTurn(boxId($event.target), "x");
    aiTurn();
}

const enableListeners = () => board().forEach(_boxEl => _boxEl.addEventListener("click", clicks));
const disableListeners = () => board().forEach(_boxEl => _boxEl.removeEventListener("click", clicks));


buildGrid();
enableListeners();
*/


/* // Game state
const players = ["O", "X"]
const gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer;
let gameBoardElem;

// create a function to allow elements to be more flexible
const createTitle = title => {
    const titleElem = document.createElement("h1");

    titleElem.textContent = title;
    document.body.appendChild(titleElem);
};

const makeGameBoardElem = () => {
    const gameBoardElem = document.createElement("div");

    gameBoardElem.classList.add("game-board");

    return gameBoardElem;
};

const makeSquareElem = squareNumber => {
    const squareElement = document.createElement("div");

    squareElement.classList.add("game-square");

    squareElement.addEventListener("click", (event) => {
        const {
            target
        } = event;
        target.textContent = currentPlayer;
        gameBoard[squareNumber] = currentPlayer;
        // CheckBoard?
        switchPlayers();
    }, { once: true } // can only click each game-square once.
    );

    return squareElement;

};

const switchPlayers = () => {
    if (currentPlayer === players[0]) {
        currentPlayer = players[1];
    } else {
        currentPlayer = players[0];
    }
};

const checkBoard = () => {
    //gameBoard
    // ["0", "1", "2"]
    // ["3", "4", "5"]
    // ["6", "7", "8"]
    const winningStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let winState of winningStates) {
        const [position1, position2, position3] = winState;

        if (gameBoard[position1]!)
      }
}

const resetGame = () => {
    gameBoardElem = makeGameBoardElem();

    for (let square = 0; square < 9; square++) {
        gameBoardElem.appendChild(makeSquareElem(square));
    }

    currentPlayer = players[0];

    document.body.appendChild(gameBoardElem);

};

createTitle("Tic-Tac-Toe");
resetGame();
 */



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