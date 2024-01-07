import player from "./player";

test.only('Player places ship', () => {
  let testPlayer = player();
  let ship = {length:2}
  expect(testPlayer.initShip(0,100,true,0)).toBe(false);
  expect(testPlayer.initShip(100,0,false,0)).toBe(false);

  expect(testPlayer.initShip(0,0,false,0)).toBe(false); //1 ship placed
  expect(testPlayer.initShip(0,0,true,0)).toBe(false);
  expect(testPlayer.initShip(4,0,true,0)).toBe(false);
  expect(testPlayer.initShip(7,0,true,0)).toBe(false); //2 ship placed

  expect(testPlayer.initShip(3,6,true,0)).toBe(false); //3 ship placed
  expect(testPlayer.initShip(4,6,false,0)).toBe(false); //4 ship placed
  expect(testPlayer.initShip(2,2,true,0)).toBe(true); //5 ship placed
})

test('Player attacks coordinate', () => {

})