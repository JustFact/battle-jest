const Ship = require("./ship");

test("Ship Creation", () => {
  expect(Ship(4).getLength()).toBe(4);
  expect(Ship(2).getLength()).toBe(2);
  expect(Ship(0).getLength()).toBe(1);
  expect(Ship().getLength()).toBe(1);
});

test("Ship being hit/sunk", () => {
  let shipSize = 4;
  let testShip = Ship(shipSize);
  for (let i = 0; i < shipSize; i++) {
    testShip.hit();
  }
  expect(testShip.isSunk()).toBe(true);

  let testShip2 = Ship(2);
  testShip2.hit();
  expect(testShip2.isSunk()).toBe(false);

  let testShip3 = Ship();
  expect(testShip3.isSunk()).toBe(false);
});
