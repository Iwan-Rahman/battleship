import './style.css';
import player from './player';

const title = document.querySelector("h1");
title.classList.add('hello');

let playerOne = player();
let playerTwo = player();
let endTurn = false;

//Place ships for player one
do{
  console.log('Player One places ships');
  //get coordinates
  let x = parseInt(prompt("x"));
  let y = parseInt(prompt("y"));
  let direction = (prompt('Place vertically: true or false')) == 'true';
  endTurn = playerOne.initShip(x,y,direction,0);
  console.log("End Turn " + endTurn);
}while(!endTurn)

//place ships for player two
endTurn = false;

do{
  console.log('Player Two places ships');
  //get coordinates
  let x = parseInt(prompt("x"));
  let y = parseInt(prompt("y"));
  let direction = (prompt('Place vertically: true or false')) == 'true';
  endTurn = playerTwo.initShip(x,y,direction,0);
  console.log("End Turn: " + endTurn);
}while(!endTurn)

//Start game
let activePlayer = playerOne;
let inactivePlayer = playerTwo;
while(activePlayer.sunkShips.length != 5){
  let msg = activePlayer == playerOne
  console.log("Player One's turn: " + msg);
  let x = parseInt(prompt('x'));
  let y = parseInt(prompt('y'));

  let endTurn = activePlayer.attack(x,y,inactivePlayer.board);
  console.log("End Turn: " + endTurn);
  if(endTurn == true){
    temp = activePlayer;
    activePlayer = inactivePlayer;
    inactivePlayer = temp;
  }
}

let msg = inactivePlayer == playerOne ? 'Player One' : 'Player Two';

alert(`${mgs} wins`);