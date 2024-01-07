const gameboard = (size) => {
  const board = Array(size).fill(Array(size).fill(null));

  const placeShip = (x,y,isVert,newShip) => {
    //isHorz represents horizontal or vertical placement of the ship

    //check if out of bounds
    if(isVert && y + newShip.length <= 9){
      for(let i = 0; i < newShip.length; i++){
        board[x][y+i] = newShip;
        return true
      }

    }else if(!isVert && x + newShip.length <= 9){
      for(let i = 0; i < newShip.length; i++){
        board[x+i][y] = newShip;
        return true
      }
    }

    return false
  }

  const receiveAttack = (x,y) => {
    /*null => hidden
      0 => miss
      1 => hit
    */

  //cannot hit the same spot again
   if(board[x][y] == 0 || board[x][y] == 1){return null}
  
   //check for ship at x,y
   if(board[x][y] != null){
      board[x][y].hit();
      board[x][y] = 1;
      return 1;
    }
    board[x][y] = 0;
    return 0;
  }

  return {board,placeShip,receiveAttack}
};

export default gameboard