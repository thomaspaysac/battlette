import './style.css';
import { Ship } from './ship.js';
import { Gameboard } from './gameboard';
import { Player } from './player';

// Gobal variables
let player1;
let player2;
let p1Cells;
let p2Cells;
let currentPlayer = 'player1';

// DOM Elements
const new_game_button = document.getElementById('new-game_button');
const player1_board = document.getElementById('player1-board');
const player2_board = document.getElementById('player2-board');
const player1_log = document.getElementById('player1-log');
const player2_log = document.getElementById('player2-log');
const turn_info = document.querySelector('.turn-info');

// Initialize game
function InitializeGame() {
  player1 = Player('Thomas');
  player1.gameboard.placeShip(5, [1,0], 'Carrier');
  player1.gameboard.placeShip(4, [3,4], 'Battleship');
  player1.gameboard.placeShip(3, [5,7], 'Cruiser', 'ver');
  player1.gameboard.placeShip(3, [7,3], 'Submarine', 'ver');
  player1.gameboard.placeShip(2, [3,2], 'Destroyer', 'ver');
  player2 = Player('Computer');
  player2.gameboard.placeShip(5, [1,0], 'Carrier');
  player2.gameboard.placeShip(4, [3,4], 'Battleship');
  player2.gameboard.placeShip(3, [5,7], 'Cruiser', 'ver');
  player2.gameboard.placeShip(3, [7,3], 'Submarine', 'ver');
  player2.gameboard.placeShip(2, [3,2], 'Destroyer', 'ver');
  /*p1Cells = PopulateP1();
  p2Cells = PopulateP2();*/
}

new_game_button.addEventListener('click', () => {
  InitializeGame();
  InitializeTurn(currentPlayer);
});

function InitializeTurn(currentPlayer) {
  UpdateInfoDisplay();
  p1Cells = PopulateP1();
  p2Cells = PopulateP2();
  if (currentPlayer === 'player1') {
    ActivateAttackOn(p2Cells, player1, player2);
  } else {
    computerAttack();
    //ActivateAttackOn(p1Cells, player2, player1);
  }
}

// Populate player 1 board
function PopulateP1 (board = 'privateBoard') {
  const targetBoard = player1.gameboard[board];
  player1_board.textContent = '';
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement('div');
      cell.textContent = targetBoard[i][j];
      if (cell.textContent === 'X') {
        cell.style.backgroundColor = '#f3bbbb';
      } else if (cell.textContent === '~') {
        cell.style.backgroundColor = '#d1d3ef';
      } else if (cell.textContent) {
        cell.textContent = 'O';
        cell.style.backgroundColor = '#c7e6d0';
      }
      cell.className = `cell1 ${i}${j}`;
      player1_board.appendChild(cell);
    }  
  }
  return document.querySelectorAll('.cell1');
}

// Populate player 2 (computer) board, using the publicBoard key to keep undiscovered squares empty
function PopulateP2 (board = 'publicBoard') {
  const targetBoard = player2.gameboard[board];
  player2_board.textContent = '';
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement('div');
      cell.textContent = targetBoard[i][j];
      if (cell.textContent === 'X') {
        cell.style.backgroundColor = '#f3bbbb';
      } else if (cell.textContent === '~') {
        cell.style.backgroundColor = '#d1d3ef';
      }
      cell.className = `cell2 ${i}${j}`;
      player2_board.appendChild(cell);
    }  
  }
  return document.querySelectorAll('.cell2');
}

// Activate attack on one player board at a time, works for PVP
function ActivateAttackOn (cellsArr, attacker, defender) {
  cellsArr.forEach(el => {
    el.addEventListener('click', (e) => {
      const targetCell = (el.className.slice(-2)).split('');
      attacker.attack(defender, targetCell[0], targetCell[1]);
      // Reveal square when attacked
      if (currentPlayer === 'player1') {
        if (defender.gameboard.privateBoard[targetCell[0]][targetCell[1]] === 'X') {
          defender.gameboard.publicBoard[targetCell[0]][targetCell[1]] = 'X';
        } else {
          defender.gameboard.publicBoard[targetCell[0]][targetCell[1]] = '~';
        }
        PopulateP2();
        currentPlayer = 'player2';
      } else {
        if (defender.gameboard.privateBoard[targetCell[0]][targetCell[1]] === 'X') {
          defender.gameboard.publicBoard[targetCell[0]][targetCell[1]] = 'X';
        } else {
          defender.gameboard.publicBoard[targetCell[0]][targetCell[1]] = '~';
        }
        PopulateP1();
        currentPlayer = 'player1';
      }
      winCheck();
      InitializeTurn(currentPlayer);
    });
  });
}

// Computer attack
function computerAttack () {
  player2.computerAttack(player1);
  winCheck();
  currentPlayer = 'player1';
  InitializeTurn(currentPlayer);
}

// Check win condition
function winCheck () {
  if (player1.gameboard.getStatus() || player2.gameboard.getStatus()) {
    console.log('Game over');
  }
}

// Display controller
function UpdateInfoDisplay () {
  turn_info.textContent = currentPlayer === 'player1' ? `${player1.playerName}'s turn` : `${player2.playerName}'s turn`;
}

// Test buttons
player1_log.addEventListener('click', () => {
  console.log(player1.gameboard);
});

player2_log.addEventListener('click', () => {
  console.log(player2.gameboard);
});


//A FAIRE
// Ajouter écran de game over
// Placement des navires
// PvP : alterner 'privateBoard' (joueur en cours) et 'publicBoard' (joueur adverse)
  // -> utiliser 'publicBoard' affiche le brouillard de guerre, 'privateBoard' affiche la position des navires
