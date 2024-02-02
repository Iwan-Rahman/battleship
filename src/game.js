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


let gameLoop = (e, phase, activePlayer) => {
}

//Place ships
//Once all ships are placed, the AI will place ships
let placeShips = (e) => {
  let [x,y] = getDOMCoords(e);
  let endPhase = playerOne.initShip(x,y,false,0);
  updatePlayerDisp(playerOne.board.board,boards[0]);
  if(endPhase == true){
    e.target.parentNode.parentNode.childNodes.forEach(col => {
      col.childNodes.forEach(cell => {
        cell.removeEventListener('click',placeShips);
      })      
    });
    aiPlaceShips();
    boards[1].childNodes.forEach(col => {
      col.childNodes.forEach(cell => {
        cell.addEventListener('click',attackBoard);
      })
    })
    updateCompDisp(playerTwo.board.board,boards[1]);
  }
}

let aiPlaceShips = () => {
  let endPhase = false;
  while(!endPhase){
    let [x,y] = [Math.floor(Math.random()*9),Math.floor(Math.random()*9)];
    endPhase = playerTwo.initShip(x,y,false,0);
  }
}


let attackBoard = (e) => {
  let [x,y] = getDOMCoords(e);
  let endPhase = playerOne.attack(playerTwo,x,y);
  if(endPhase == true){
    if(playerTwo.sunkShips.length == 5){
      alert("You win!");
      e.target.parentNode.parentNode.childNodes.forEach(col => {
        col.childNodes.forEach(cell => {
          cell.removeEventListener('click',attackBoard);
        })      
      });
    }else{
      aiAttack();
      if(playerOne.sunkShips.length == 5){
        alert("You lose :(");
        e.target.parentNode.parentNode.childNodes.forEach(col => {
          col.childNodes.forEach(cell => {
            cell.removeEventListener('click',attackBoard);
          })      
        });
      }
    }
  }
  updatePlayerDisp(playerOne.board.board,boards[0]);
  updateCompDisp(playerTwo.board.board,boards[1]);
}

let aiAttack = () => {
  let endPhase = false;
  while(!endPhase){
    let [x,y] = [Math.floor(Math.random()*9),Math.floor(Math.random()*9)];
    endPhase = playerTwo.attack(playerOne,x,y);
  }
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

function updateCompDisp(board,boardWrapper){
  let boardDOM = [...boardWrapper.childNodes];
  boardDOM = boardDOM.map(e => e.childNodes);
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
      boardDOM[i][j].textContent = board[i][j] == null ? null : board[i][j].toString();
      if(boardDOM[i][j].textContent == 'S'){boardDOM[i][j].textContent = null};
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
    rowB1.append(cellB1);
    rowB2.append(cellB2);
  }
}
