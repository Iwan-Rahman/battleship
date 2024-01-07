import gameboard from "./gameboard";
import ship from "./ship";

const player = (boardSize = 10) => {
  let currentShips = [];
  let board = gameboard(10);
  let attacks = []
  let sunkShips = [ship(5),ship(4),ship(3),ship(3),ship(2)] //sunk or unplaced ships

    //return false if the player can place another ship, true otherwise
    const initShip = (x,y,isVert,indexOfSunkShip) => {
      if(board.placeShip(x,y,isVert,sunkShips[indexOfSunkShip])){
        currentShips.push(sunkShips[indexOfSunkShip]);
        sunkShips.splice(indexOfSunkShip,1);
        return currentShips.length == 5 ? true : false;
      }else{
        return false;
      }
    }

    //Returns false if the player can make another attack, true otherwise
    const attack = (gameboard, x,y) => {
      //attack cannot be in already selected coordinate
      if(attacks.some(coord => coord[0] == x && coord[1] == y)){return false}
      attacks.push([x,y]);
      return gameboard.recieveAttack(x,y) == 1 ? false : true
    }

    return {initShip,attack}
  }

export default player