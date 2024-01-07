import gameboard from "./gameboard";
import ship from "./ship";

test('Place ship', () => {
  let testBoard = gameboard(10);
  expect(testBoard.placeShip(12,12,true,ship(2))).toBe(false);  
  expect(testBoard.placeShip(0,7,true,ship(5))).toBe(false);
  expect(testBoard.placeShip(7,0,false,ship(5))).toBe(false);
  expect(testBoard.placeShip(7,7,false,ship(1))).toBe(true);
  expect(testBoard.placeShip(7,9,false,ship(2))).toBe(true);
  expect(testBoard.placeShip(9,7,true,ship(2))).toBe(true);  
})

test('Recieve Attack', () => {
  let testBoard = gameboard(10);
  testBoard.board[0][0] = ship();
  expect(testBoard.receiveAttack(9,9)).toBe(0);
  expect(testBoard.receiveAttack(0,0)).toBe(1);
  expect(testBoard.receiveAttack(0,0)).toBe(null);
  expect(testBoard.receiveAttack(9,9)).toBe(null);
})