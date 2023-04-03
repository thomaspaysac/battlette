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
  player1 = Player();
  player1.gameboard.placeShip(5, [1,0], 'Carrier');
  player1.gameboard.placeShip(4, [3,4], 'Battleship');
  player1.gameboard.placeShip(3, [5,7], 'Cruiser', 'ver');
  player1.gameboard.placeShip(3, [7,3], 'Submarine', 'ver');
  player1.gameboard.placeShip(2, [3,2], 'Destroyer', 'ver');
  player2 = Player();
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
    console.log('Player 1 turn');
    ActivateAttackOn(p2Cells, player1, player2);
  } else {
    console.log('Player 2 turn');
    ActivateAttackOn(p1Cells, player2, player1);
  }
}

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
      if (currentPlayer === 'player1') {
        PopulateP2();
        currentPlayer = 'player2';
      } else {
        PopulateP1();
        currentPlayer = 'player1';
      }
      InitializeTurn(currentPlayer);
    });
  });
}

// Display controller
function UpdateInfoDisplay () {
  turn_info.textContent = `${currentPlayer}'s turn`;
}

// Test buttons
player1_log.addEventListener('click', () => {
  console.log(player1.gameboard);
});

player2_log.addEventListener('click', () => {
  console.log(player2.gameboard);
});



// A chaque début de tour : 
// Changer joueur actif
// Réactiver attack sur la grille de l'autre joueur

// A chaque attack :
// Lancer la fonction d'attaque
// Mettre à jour la grille touchée
// Réinitialiser le tour

// Liste des navires :
// Carrier 5
// Battleship 4
// Cruiser 3
// Submarine 3
// Destroyer 2

// A faire :
// Brouillard de guerre (les cases non explorées sont vides) -> ajouter une classe CSS non-explorée ?