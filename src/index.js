import './style.css';
import { Ship } from './ship.js';
import { Gameboard } from './gameboard';
import { Player } from './player';

// Gobal variables
let player1;
let player2;
let p1Cells;
let p2Cells;

// DOM Elements
const new_game_button = document.getElementById('new-game_button');
const player1_board = document.getElementById('player1-board');
const player2_board = document.getElementById('player2-board');

// Initialize game
new_game_button.addEventListener('click', () => {
  player1 = Player();
  player2 = Player();
  p1Cells = PopulateP1();
  p2Cells = PopulateP2();
  ActivateAttackOn(p2Cells, player1, player2);
});

// Populate player 1 board
function PopulateP1 () {
  player1_board.textContent = '';
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement('div');
      cell.textContent = player1.gameboard.board[i][j];
      cell.className = `cell1 ${i}${j}`;
      player1_board.appendChild(cell);
    }  
  }
  return document.querySelectorAll('.cell1');
}

// Populate player 2 board
function PopulateP2 () {
  player2_board.textContent = '';
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement('div');
      cell.textContent = player2.gameboard.board[i][j];
      cell.className = `cell2 ${i}${j}`;
      player2_board.appendChild(cell);
    }  
  }
  return document.querySelectorAll('.cell2');
}

// Activate attack on one player board at a time
function ActivateAttackOn (cellsArr, attacker, defender) {
  cellsArr.forEach(el => {
    el.addEventListener('click', (e) => {
      const targetCell = (el.className.slice(-2)).split('');
      attacker.attack(defender, targetCell[0], targetCell[1]);
      console.log(defender.gameboard.board);
      PopulateP1();
      PopulateP2();
    });
  });
}