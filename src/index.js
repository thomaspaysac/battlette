import './style.css';
import { Ship } from './ship.js';
import { Gameboard } from './gameboard';

let newShip = Ship(3);

let board = Gameboard();
board.placeShip('Matriarche', 5, [1,2], 'ver');
console.log(board);