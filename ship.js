const Ship = (length) => {
  let shipLength = length || 1;
  let hitsTaken = 0;
  let hitCoordinates = [];
  let sunk = false;
  let X_Axis = true;
  const hit = () => {
    if (sunk) {
      return;
    } else {
      hitsTaken++;
    }
  };
  const getHitCoordinates = () => hitCoordinates;
  const setHitCoordinate = (x, y) => hitCoordinates.push({ x, y });
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
    getHitCoordinates,
    setHitCoordinate,
  };
};

module.exports = Ship;
