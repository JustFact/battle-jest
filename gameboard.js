const Gameboard = () => {
  let board = Array(10)
    .fill(0)
    .map((e) => Array(10).fill(0));

  const receiveAttack = (x, y) => {};

  const getBoard = () => board;
  return {
    receiveAttack,
    getBoard,
  };
};

module.exports = Gameboard;
