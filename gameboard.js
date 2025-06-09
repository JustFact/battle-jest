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
  return {
    receiveAttack,
    getBoard,
  };
};

module.exports = Gameboard;
