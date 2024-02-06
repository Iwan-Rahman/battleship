import './style.css';
import player from './player';
import ship from './ship';

//Players
let playerOne = player();
let playerTwo = player(); //Computer
let activePlayer = playerOne;


let vertical = false; //Used to toggle between horizontal and vertical ship placement
let toggleVertical = () => {
  vertical = vertical == true ? false : true;
}

document.querySelector(".board").addEventListener("contextmenu",(e) => {
  toggleVertical();
  updatePlayerDisp(playerOne.board.board,boards[0]);
  showPlacement(e);
  e.preventDefault();
})


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
//Once all ships are placed, the AI will place ships
let placeShips = (e) => {
  let [x,y] = getDOMCoords(e);
  let endPhase = playerOne.initShip(x,y,vertical,0);
  updatePlayerDisp(playerOne.board.board,boards[0]);
  document.querySelector(".msg p").textContent = "Ships Left: " + playerOne.sunkShips.length;
  if(endPhase == true){
    e.target.parentNode.parentNode.childNodes.forEach(col => {
      col.childNodes.forEach(cell => {
        cell.removeEventListener('click',placeShips);
        cell.removeEventListener('mouseenter',showPlacement);
      })      
    });
    aiPlaceShips();
    boards[1].childNodes.forEach(col => {
      col.childNodes.forEach(cell => {
        cell.addEventListener('click',attackBoard);
      })
    })
    document.querySelector(".msg h2").textContent = "Attack Ships";
    document.querySelector(".msg p").textContent = "Ships Left: " + (5 - playerTwo.sunkShips.length);
    updateCompDisp(playerTwo.board.board,boards[1]);
  }
}

let aiPlaceShips = () => {
  let endPhase = false;
  while(!endPhase){
    let [x,y] = [Math.floor(Math.random()*9),Math.floor(Math.random()*9)];
    let vertical = Math.floor(Math.random()*2) == 0 ? false : true;
    endPhase = playerTwo.initShip(x,y,vertical,0);
  }
}


let attackBoard = (e) => {
  let [x,y] = getDOMCoords(e);
  let endPhase = playerOne.attack(playerTwo,x,y);
  if(endPhase == true){
    if(playerTwo.sunkShips.length == 5){
      document.querySelector(".msg h2").textContent = "Player wins!";
      e.target.parentNode.parentNode.childNodes.forEach(col => {
        col.childNodes.forEach(cell => {
          cell.removeEventListener('click',attackBoard);
        })      
      });
    }else{
      aiAttack();
      if(playerOne.sunkShips.length == 5){
        document.querySelector(".msg h2").textContent = "Computer wins!";
        e.target.parentNode.parentNode.childNodes.forEach(col => {
          col.childNodes.forEach(cell => {
            cell.removeEventListener('click',attackBoard);
          })      
        });
      }
    }
  }
  document.querySelector(".msg p").textContent = "Ships Left: " + (5 - playerTwo.sunkShips.length);
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
function showPlacement(e){
  
  let isVert = vertical;
  let shipLength = activePlayer.sunkShips[0].length
  let [x,y] = getDOMCoords(e);
  let board = e.target.parentNode.parentNode;
  console.log(x+shipLength);
    if(x + shipLength >= 11 && vertical == false){
      for(let i = 0; i <= 9-x; i++){
        board.childNodes[x + i*(!isVert)].childNodes[y + i*(isVert)].style.backgroundColor = "red";
      }
    }else if(y + shipLength >= 11 && vertical == true){
      for(let i = 0; i <= 9-y; i++){
        board.childNodes[x + i*(!isVert)].childNodes[y + i*(isVert)].style.backgroundColor = "red";
      }
    }
    else{
      for(let i = 0; i < shipLength; i++){
        console.log(board.childNodes[x + i*(!isVert)].childNodes[y + i*(isVert)].style.backgroundColor)
        if(board.childNodes[x + i*(!isVert)].childNodes[y + i*(isVert)].style.backgroundColor == "inherit"){
          board.childNodes[x + i*(!isVert)].childNodes[y + i*(isVert)].style.backgroundColor = "aquamarine";
        }else{
          board.childNodes[x + i*(!isVert)].childNodes[y + i*(isVert)].style.backgroundColor = "red";
        }

      }
    }
    e.target.addEventListener("mouseleave",() => {updatePlayerDisp(playerOne.board.board,boards[0]);})
}
//Requires 2D nodelist of the boardDOM
//Update Display
function updatePlayerDisp(board,boardWrapper){
  let boardDOM = [...boardWrapper.childNodes];
  boardDOM = boardDOM.map(e => e.childNodes);
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
      boardDOM[i][j].textContent = board[i][j] == null ? null : board[i][j].toString();
      switch(boardDOM[i][j].textContent){
        case('S'):
        boardDOM[i][j].style.backgroundColor = 'darkseagreen';
        break;
        case('0'):
        boardDOM[i][j].style.backgroundColor = 'dimgrey';
        break;
        case('1'):
        boardDOM[i][j].style.backgroundColor = 'maroon';
        break;
        default:
          boardDOM[i][j].style.backgroundColor = 'inherit';
      };
      boardDOM[i][j].textContent = null;
    }
  }
}

function updateCompDisp(board,boardWrapper){
  let boardDOM = [...boardWrapper.childNodes];
  boardDOM = boardDOM.map(e => e.childNodes);
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
      boardDOM[i][j].textContent = board[i][j] == null ? null : board[i][j].toString();
      switch(boardDOM[i][j].textContent){
        case('0'):
        boardDOM[i][j].style.backgroundColor = 'dimgrey';
        break;
        case('1'):
        boardDOM[i][j].style.backgroundColor = 'maroon';
        break;
      };
     boardDOM[i][j].textContent = null;
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
    cellB1.addEventListener('mouseenter',showPlacement);
    let cellB2 = document.createElement('div');
    rowB1.append(cellB1);
    rowB2.append(cellB2);
  }
}
