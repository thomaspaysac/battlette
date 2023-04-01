import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

const Player = (name) => {
  return {
    playerName: name,

    board: Gameboard(),

    attack: function (player, x, y) {
      player.board.receiveAttack([x, y]);
    },

    score: 0,
  };
};

export { Player };