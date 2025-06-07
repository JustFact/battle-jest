const Ship = (length) => {
  let shipLength = length || 1;
  let hitsTaken = 0;
  let sunk = false;
  const hit = () => {
    if (sunk) {
      return;
    } else {
      hitsTaken++;
    }
  };
  const isSunk = () => {
    if (shipLength - hitsTaken <= 0) {
      sunk = true;
      return sunk;
    } else {
      return false;
    }
  };
  const getLength = () => shipLength;
  return {
    hit,
    isSunk,
    getLength,
  };
};

module.exports = Ship;
