const gameboard = (size) => {
  const board = (() => {
    let arr = [];
    for(let i = 0; i < size; i++){
      arr[i] = []
      for(let j = 0; j < size; j++){
        arr[i][j] = null;
      }
    }

    return arr;
  })()

  const placeShip = (x,y,isVert,newShip) => {
    //isHorz represents horizontal or vertical placement of the ship

    //check if out of bounds
    // if(isVert && y + newShip.length <= 9 && board[x][y] == null){
    //   for(let i = 0; i < newShip.length; i++){
    //     board[x][y+i] = newShip;
    //   }

    // }else if(!isVert && x + newShip.length <= 9 && board[x][y] == null){
    //   for(let i = 0; i < newShip.length; i++){
    //     board[x+i][y] = newShip;
    //   }
    // }else{
    //   return false
    // }
    if(((isVert && y + newShip.length <=9) || (!isVert && x + newShip.length <= 9)) && board[x][y] == null){
      for(let i = 0; i < newShip.length; i++){
        board[x + i*(!isVert)][y + i*(isVert)] = newShip;
      }
      ships.push(newShip);
      return true
    }else{
      return false;
    }
  }

  const receiveAttack = (x,y) => {
    /*null => hidden
      0 => miss
      1 => hit
    */
  //cannot hit the same spot again
   if(board[x][y] == 0 || board[x][y] == 1){return null}
   
   attacks.push({x,y});
   
   //check for ship at x,y
   if(board[x][y] != null){
      board[x][y].hit();
      board[x][y] = 1;
      return 1;
    }
    board[x][y] = 0;
    return 0;
  }

  let attacks = [];
  let ships = [];
  return {board,placeShip,receiveAttack}
};

export default gameboard