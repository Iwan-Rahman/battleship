import ship from "./ship";

test('Ship Hit', () => {
  let boat = ship(1);
  expect(boat.hit()).toBe(1);
})

test('Ship Sunk', () => {
  let boat = ship(2)
  expect(boat.isSunk()).toBe(false);
  expect(boat.hit()).toBe(1);
  expect(boat.isSunk()).toBe(false);
  expect(boat.hit()).toBe(2);
  expect(boat.isSunk()).toBe(true);

})