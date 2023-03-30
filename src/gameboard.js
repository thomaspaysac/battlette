import { Ship } from './ship.js';


const Gameboard = () => {
  return {
    board: [
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
    ],

    placeShip: function (shipName, size, startPos, orientation = 'hor') {
      //let newShip = Ship(size);
      if (!this.isValid(size, startPos)) {
        throw new Error('Cannot place ship: out of bounds of space already occupied.');
      } else {
        if (orientation === 'hor') {
          for (let i = 0; i < size; i++) {
            this.board[startPos[0]][startPos[1] + i] = shipName;
          }
        } else if (orientation === 'ver') {
          for (let i = 0; i < size; i++) {
            this.board[startPos[0] + i][startPos[1]] = shipName;
          }
        }
      }
    },

    isValid: function (size, startPos, orientation = 'hor') {
      let sizeCheck = true;
      let availableCheck = true;
      if ((startPos[1] + size - 1) > 9 || (startPos[0] + size - 1) > 9) {
        sizeCheck = false;
      }
      let targetArr = [];
      if (orientation === 'hor') {
        for (let i = 0; i < size; i++) { // check if horizontal placement is empty
          targetArr.push(this.board[startPos[0]][startPos[1] + i]);
          }
      } else {
        for (let i = 0; i < size; i++) {
          targetArr.push(this.board[startPos[0] + i][startPos[1]]);
        }
      }
      availableCheck = targetArr.every(el => el === undefined);
      return (sizeCheck && availableCheck);
      },
  };
};

export { Gameboard };