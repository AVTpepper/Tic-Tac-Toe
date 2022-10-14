
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
    gameMode.appendChild(multiplayerLabel2);



const gameBoard = document.createElement("div");
    gameBoard.classList.add("game-board");
    document.body.appendChild(gameBoard);

let gridSize = 9

function buildGrid () {
    for(x=0; x<gridSize; x++) {
        const boxes = document.createElement("div");
        boxes.className="box";
        boxes.id=x;
        gameBoard.appendChild(boxes);
    }
}

const board = () => Array.from(document.getElementsByClassName("box"));
const boxId= (boxEl) => Number.parseInt(boxEl.id);
const emptyBoxes = () => grid().filter(_boxEl => _boxEl.innerText === "");
const allSame = (arr) => arr.every(_boxEl => _boxEl.innerText === arr[0].innerText && _boxEl.innerText !=="");


const takeTurn = (index, letter) => board()[index].innerText = letter;
const opponentChoice = () => 0;

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