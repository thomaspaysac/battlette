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

    shipList: [],

    placeShip: function (size, startPos, shipName = 'Unnamed ship', direction = 'hor') {
      if (!this.isValid(size, startPos)) {
        throw new Error('Cannot place ship: out of bounds or space already occupied.');
      } else {
        let newShip = Ship(size, shipName);
        this.shipList.push(newShip);
        if (direction === 'hor') {
          for (let i = 0; i < size; i++) {
            this.board[startPos[0]][startPos[1] + i] = shipName;
          }
        } else if (direction === 'ver') {
          for (let i = 0; i < size; i++) {
            this.board[startPos[0] + i][startPos[1]] = shipName;
          }
        }
      }
    },

    isValid: function (size, startPos, direction = 'hor') {
      let sizeCheck = true;
      let availableCheck = true;
      if ((startPos[1] + size - 1) > 9 || (startPos[0] + size - 1) > 9) {
        sizeCheck = false;
      }
      let targetArr = [];
      if (direction === 'hor') {
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

    receiveAttack: function (targetPos) {
     if (this.board[targetPos[0]][targetPos[1]] === undefined) {
      this.board[targetPos[0]][targetPos[1]] = '~';
      return 'You missed';
     } else if (this.board[targetPos[0]][targetPos[1]] === '~' || this.board[targetPos[0]][targetPos[1]] === 'X') {
      throw new Error('You cannot attack the same spot twice');
     } else {
      let target = this.shipList.find(el => el.name === this.board[targetPos[0]][targetPos[1]]);
      target.hits++;
      this.board[targetPos[0]][targetPos[1]] = 'X';
      if (target.isSunk()) {
        return 'The ship has sunk';
      } else {
      return target.name + ' has been hit, ' + (target.size - target.hits) +' hit(s) left';
      }
     }
    },

    getStatus: function() {
      const condensedBoard = [];
      const statusBoard = [];
      for (let i = 0; i < this.board.length; i++) {
        for (let j = 0; j < this.board[i].length; j++) {
          condensedBoard.push(this.board[i][j]);
        }
      }
      for (let i = 0; i < condensedBoard.length; i++) {
        if (condensedBoard[i] === 'X' || condensedBoard[i] === '~' || condensedBoard[i] === undefined) {
          statusBoard.push(true);
        } else {
          statusBoard.push(false);
        }
      }
      if (statusBoard.every(el => el === true)) {
        return 'All ships destroyed';
      } else {
        return 'There are still ships on the board';
      }
    },

  };
};

export { Gameboard };