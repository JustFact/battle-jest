const Gameboard = require("./gameboard");
const Ship = require("./ship");

test("Testing gameboard", () => {
  let testValue = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  let testBoard = Gameboard();
  expect(testBoard.getBoard()).toStrictEqual(testValue);
});

test("Test missed attacks", () => {
  let testValue = [
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, "x", 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, "x", 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, "x"],
  ];
  let gameboard = Gameboard();
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(5, 5);
  gameboard.receiveAttack(9, 9);
  gameboard.receiveAttack(7, 4);
  expect(gameboard.getBoard()).toStrictEqual(testValue);
});

test("Test ship placement", () => {
  let gameboard = Gameboard();
  let ship = Ship(4);
  let expectedValue = [
    [ship, ship, ship, ship, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  expect(gameboard.placeShip(0, 0, ship)).toBe(true);
  expect(gameboard.getBoard()).toStrictEqual(expectedValue);

  //Following ship should not be placed
  ship.changeOrientation();
  expect(gameboard.placeShip(0, 0, ship)).toBe(false);
  expect(gameboard.getBoard()).toStrictEqual(expectedValue);

  //Ship should be placed vertically
  let ship2 = Ship(2);
  ship2.changeOrientation();
  let expectedValue2 = [
    [ship, ship, ship, ship, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, ship2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, ship2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  expect(gameboard.placeShip(3, 2, ship2)).toBe(true);
  expect(gameboard.getBoard()).toStrictEqual(expectedValue2);
});

test("Test Ship being hit", () => {
  let ship = Ship(4);
  let gameboard = Gameboard();
  gameboard.placeShip(3, 2, ship);
  gameboard.receiveAttack(3, 3);
  gameboard.receiveAttack(3, 3); //hit on same coord. should be ignored
  gameboard.receiveAttack(3, 5);
  expect(ship.getHitCoordinates()).toStrictEqual([
    { x: 3, y: 3 },
    { x: 3, y: 5 },
  ]);

  //vertical ship
  let ship2 = Ship(3);
  ship2.changeOrientation();
  gameboard.placeShip(4, 5, ship2);
  gameboard.receiveAttack(6, 5);
  expect(ship2.getHitCoordinates()).toStrictEqual([{ x: 6, y: 5 }]);
});
