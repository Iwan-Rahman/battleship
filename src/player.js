import gameboard from "./gameboard";
import ship from "./ship";

const player = (boardSize = 10) => {
  let currentShips = [];
  let board = gameboard(10);
  let attacks = []
  let sunkShips = [ship(5),ship(4),ship(3),ship(3),ship(2)] //sunk or unplaced ships

    //return false if the player can place another ship, true otherwise
    const initShip = (x,y,isVert,indexOfSunkShip) => {
      if(sunkShips.length == 0){return true}
      if(board.placeShip(x,y,isVert,sunkShips[indexOfSunkShip])){
        currentShips.push(sunkShips[indexOfSunkShip]);
        sunkShips.splice(indexOfSunkShip,1);
        return currentShips.length == 5 ? true : false;
      }else{
        return false;
      }
    }

    //Returns false if the player can make another attack, true otherwise
    const attack = (player, x,y) => {
      //attack cannot be in already selected coordinate
      if(attacks.some(coord => coord[0] == x && coord[1] == y)){return false}
      attacks.push([x,y]);
      let hit = player.board.receiveAttack(x,y) 
      if(hit != 0){
        if(hit.isSunk()){
          player.sunkShips.push(hit);
          console.log("SUNK!")
          console.log(player.sunkShips);
          return player.sunkShips.length < 5 ? false : true;
        };
      }
      return hit != 0 ? false : true;
    }

    
    const switchShip = (fwdDirection) => {
      if(sunkShips.length != 0 && !fwdDirection){
        sunkShips.unshift(sunkShips[sunkShips.length - 1]);
        sunkShips.pop();
      }else{
        sunkShips.push(sunkShips[0]);
        sunkShips.shift();
      }
    }
    return {board, initShip,attack,sunkShips, switchShip}
  }

export default player