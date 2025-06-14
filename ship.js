const Ship = (length) => {
  let shipLength = length || 1;
  let hitsTaken = 0;
  let sunk = false;
  let X_Axis = true;
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
  const changeOrientation = () => (X_Axis = !X_Axis);
  const getOrientation = () => (X_Axis ? "X" : "Y");
  return {
    hit,
    isSunk,
    getLength,
    changeOrientation,
    getOrientation,
  };
};

module.exports = Ship;
