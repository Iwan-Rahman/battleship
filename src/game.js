import './style.css';
import player from './player';

//Global Variables
let playerOne = player();
let playerTwo = player();
let activePlayer = playerOne;
//Gets x and y selected on grid
let getDOMCoords = (e) => {
  let node = e.target;
  let cols = Array.from(node.parentNode.childNodes);
  let rows = Array.from(node.parentNode.parentNode.childNodes);
  let x = rows.indexOf(node.parentNode);
  let y = cols.indexOf(node);
  return [x,y];
}

//Place ships
let placeShips = (e) => {
  let [x,y] = getDOMCoords(e);
  playerOne.initShip(x,y,false,0);
  updatePlayerDisp(playerOne.board.board,boards[0]);
}

//Requires 2D nodelist of the boardDOM
//Update Display
function updatePlayerDisp(board,boardWrapper){
  let boardDOM = [...boardWrapper.childNodes];
  boardDOM = boardDOM.map(e => e.childNodes);
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
      boardDOM[i][j].textContent = board[i][j] == null ? null : board[i][j].toString();
    }
  }
}

//Create Gameboard Displays
let boards = document.querySelectorAll(".board")
for(let i=0; i < 10; i++){
  let rowB1 = document.createElement('div');
  let rowB2 = document.createElement('div');
  boards[0].append(rowB1);
  boards[1].append(rowB2);
  for(let j=0; j<10; j++){
    let cellB1 = document.createElement('div');
    cellB1.addEventListener('click',placeShips);
    let cellB2 = document.createElement('div');
    cellB2.addEventListener('click',placeShips);
    rowB1.append(cellB1);
    rowB2.append(cellB2);
  }
}




// let playerOne = player();
// let playerTwo = player();
// let endTurn = false;
// //Place ships for player one
// do{
//   console.log('Player One places ships');
//   //get coordinates
//   let x = parseInt(prompt("x"));
//   let y = parseInt(prompt("y"));
//   let direction = (prompt('Place vertically: true or false')) == 'true';
//   endTurn = playerOne.initShip(x,y,direction,0);
//   console.log("End Turn " + endTurn);
// }while(!endTurn)

// //place ships for player two
// endTurn = false;

// do{
//   console.log('Player Two places ships');
//   //get coordinates
//   let x = parseInt(prompt("x"));
//   let y = parseInt(prompt("y"));
//   let direction = (prompt('Place vertically: true or false')) == 'true';
//   endTurn = playerTwo.initShip(x,y,direction,0);
//   console.log("End Turn: " + endTurn);
// }while(!endTurn)

// //Start game
// let activePlayer = playerOne;
// let inactivePlayer = playerTwo;
// while(activePlayer.sunkShips.length != 5){
//   let msg = activePlayer == playerOne
//   console.log("Player One's turn: " + msg);
//   let x = parseInt(prompt('x'));
//   let y = parseInt(prompt('y'));

//   let endTurn = activePlayer.attack(x,y,inactivePlayer.board);
//   console.log("End Turn: " + endTurn);
//   if(endTurn == true){
//     temp = activePlayer;
//     activePlayer = inactivePlayer;
//     inactivePlayer = temp;
//   }
// }

// let msg = inactivePlayer == playerOne ? 'Player One' : 'Player Two';

// alert(`${mgs} wins`);