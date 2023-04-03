import { Player } from "./player";
import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

it('should create a new player', () => {
  let newPlayer = Player('Thomas');
  expect(newPlayer.playerName).toBe('Thomas');
});

it('should create a boardgame for the player', () => {
  let newPlayer = Player('Thomas');
  let playerBoard = newPlayer.gameboard;
  let emptyBoard= Gameboard();
  expect(JSON.stringify(playerBoard)).toEqual(JSON.stringify(emptyBoard));
});

it('should be able to place ships on a player board', () => {
  let player1 = Player('Player 1');
  player1.gameboard.placeShip(2, [0,0], 'Carrier');
  let playerBoard = player1.gameboard.board;
  let testBoard = Gameboard();
  testBoard.placeShip(2, [0,0], 'Carrier');
  expect(playerBoard).toEqual(testBoard.board);
});

it('should access player\'s ships', () => {
  let player1 = Player('Player 1');
  player1.gameboard.placeShip(2, [0,0], 'Carrier');
  expect(JSON.stringify(player1.gameboard.shipList)).toBe(`[{\"name\":\"Carrier\",\"size\":2,\"hits\":0}]`);
});

it('should attack the other player\'s board', () => {
  let player1 = Player('Player1');
  player1.gameboard.placeShip(2, [0,0], 'Carrier');
  let testBoard = player1.gameboard.board;
  let player2 = Player('Player2');
  player2.attack(player1, 0, 0);
  expect(testBoard[0][0]).toBe('X');
});

it('should change player\'ship hit property when attacked', () => {
  let player1 = Player('Player 1');
  player1.gameboard.placeShip(2, [0,0], 'Carrier');
  let player2 = Player('Player2');
  player2.attack(player1, 0, 0);
  expect(player1.gameboard.shipList[0].hits).toBe(1);
});

it('should send an error when attacking twice on the same spot', () => {
  let player1 = Player('Player1');
  player1.gameboard.placeShip(3, [0,0], 'Carrier');
  let testBoard = player1.gameboard.board;
  let player2 = Player('Player2');
  player2.attack(player1, 0, 0);
  expect(() => player2.attack(player1, 0, 0)).toThrow();
});

it('should make the computer randomly choose an empty square', () => {
  let player1 = Player('Player1');
  let computer = Player('Computer');
  expect(computer.computerAttack(player1)).toBe();
});