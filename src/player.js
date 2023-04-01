import { Gameboard } from "./gameboard";

const Player = (name) => {
  return {
    playerName: name,

    board: Gameboard(),

    attack: function (player, x, y) {
      player.board.receiveAttack([x, y]);
    },

    computerAttack: function (player) {
      let coord = findValidMove(player.board.board);
      this.attack(player, coord[0], coord[1]);
    },

    score: 0,
  };
};

function rndCoordinates () {
  let x = Math.floor(Math.random() * 9);
  let y = Math.floor(Math.random() * 9);
  return [[x],[y]];
}

function findValidMove (board) {
  // Generate two random number between 0-9
  let coordinates = rndCoordinates();
  // continue while the move is invalid, launch attack when finding a valid move
  while (board[coordinates[0]][coordinates[1]] === 'X' || board[coordinates[0]][coordinates[1]] === '~') {
    coordinates = rndCoordinates();
  }
  return coordinates;
}

export { Player };