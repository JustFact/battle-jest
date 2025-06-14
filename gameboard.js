const Gameboard = () => {
  let board = Array(10)
    .fill(0)
    .map((e) => Array(10).fill(0));

  const receiveAttack = (x, y) => {
    if (board[x][y] === 0) {
      board[x][y] = "x";
    }
  };

  const getBoard = () => board;

  const placeShip = (x, y, ship) => {
    let ori = ship.getOrientation();
    let len = ship.getLength();
    let canBePlaced = true; //checks if the ship can be placed
    //check loop
    for (let i = 0; i < len; i++) {
      if (ori === "X") {
        if (board[x][y + i] !== 0) {
          canBePlaced = canBePlaced && false;
        } else {
          canBePlaced = canBePlaced && true;
        }
      } else if (ori === "Y") {
        if (board[x + i][y] !== 0) {
          canBePlaced = canBePlaced && false;
        } else {
          canBePlaced = canBePlaced && true;
        }
      }
    }

    //placing ship
    for (let i = 0; i < len; i++) {
      if (ori === "X") {
        if (canBePlaced) {
          board[x][y + i] = ship;
        }
      } else if (ori === "Y") {
        if (canBePlaced) {
          board[x + i][y] = ship;
        }
      }
    }
    return canBePlaced;
  };

  return {
    receiveAttack,
    getBoard,
    placeShip,
  };
};

module.exports = Gameboard;
