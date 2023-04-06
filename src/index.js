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
const start_game_button = document.getElementById('start-game_button');
const player1_board = document.getElementById('player1-board');
const player2_board = document.getElementById('player2-board');
const player1_log = document.getElementById('player1-log');
const player2_log = document.getElementById('player2-log');
const turn_info = document.querySelector('.turn-info');
const p1Carrier = document.getElementById('p1-carrier');
const p1Battleship = document.getElementById('p1-battleship');
const p1Cruiser = document.getElementById('p1-cruiser');
const p1Submarine = document.getElementById('p1-submarine');
const p1Destroyer = document.getElementById('p1-destroyer');


// Initialize game
function InitializeGame() {
  player1 = Player('Thomas');
  player2 = Player('Computer');
  /*player2.gameboard.placeShip(5, [1,0], 'Carrier');
  player2.gameboard.placeShip(4, [3,4], 'Battleship');
  player2.gameboard.placeShip(3, [5,7], 'Cruiser', 'ver');
  player2.gameboard.placeShip(3, [7,3], 'Submarine', 'ver');
  player2.gameboard.placeShip(2, [3,2], 'Destroyer', 'ver');*/
  p1Cells = PopulateP1();
  p2Cells = PopulateP2();
}

new_game_button.addEventListener('click', () => {
  InitializeGame();
  p1Carrier.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 5, 'Carrier', 'ver'));
  p1Battleship.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 4, 'Battleship'));
  p1Cruiser.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 3, 'Cruiser'));
  p1Submarine.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 3, 'Submarine'));
  p1Destroyer.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 2, 'Destroyer'));
});

start_game_button.addEventListener('click', () => StartGame());


// Activate click on own board to place ships
function ActivatePlacement (player, cellsArr, size, shipName, orientation = 'hor') {
  // Check if the ship has already been placed, if yes then the function returns an error
  let placedShip = player.gameboard.shipList.find(el => el.name === shipName);
  if (placedShip) {
    throw new Error('This ship is already in place.');

  } else {
  cellsArr.forEach(el => {
    // Display ship size overlay on hover
    if (orientation === 'hor') {
      el.addEventListener('mouseover', (e) => {    
        const startingY = el.className.slice(0,7);
        const startingX = el.className.slice(7,8);
        if (player.gameboard.isValid(size, [+startingY.slice(-1), +startingX])) {
          for (let i = +startingX; i < (+startingX + size); i++) {
            const coloredCell = document.getElementsByClassName(`${startingY}${i}`)[0];
            coloredCell.classList.add('placing-ship-cell');
          }
          el.addEventListener('mouseout', (e) => {
            cellsArr.forEach(el => el.classList.remove('placing-ship-cell'));
          });
        } else {
          for (let i = +startingX; i < 10; i++) {
            const coloredCell = document.getElementsByClassName(`${startingY}${i}`)[0];
            coloredCell.classList.add('placing-error');
          }
          el.addEventListener('mouseout', (e) => {
            cellsArr.forEach(el => el.classList.remove('placing-error'));
          });
        }
      });
    } else {
      el.addEventListener('mouseover', (e) => {    
        const startingY = el.className.slice(0,7);
        const Ycoord = +startingY.slice(-1);
        const startingX = +el.className.slice(7,8);
        const cellName = el.className.slice(0,6);
        console.log(player.gameboard.isValid(size, [Ycoord, startingX], 'ver'));
        if (player.gameboard.isValid(size, [Ycoord, startingX], 'ver')) {
          for (let i = Ycoord; i < (Ycoord + size); i++) {
            const coloredCell = document.getElementsByClassName(`${cellName}${i}${startingX}`)[0];
            coloredCell.classList.add('placing-ship-cell');
          }
          el.addEventListener('mouseout', (e) => {
            cellsArr.forEach(el => el.classList.remove('placing-ship-cell'));
          });
        } else {
          for (let i = Ycoord; i < 10; i++) {
            const coloredCell = document.getElementsByClassName(`${cellName}${i}${startingX}`)[0];
            console.log(coloredCell);
            coloredCell.classList.add('placing-error');
          }
          el.addEventListener('mouseout', (e) => {
            cellsArr.forEach(el => el.classList.remove('placing-error'));
          });
        }
      });
    }
    // Place ship when clicking
    el.addEventListener('click', (e) => {
      const targetCell = (el.className.slice(6, 8)).split('');
      const targetCoordinates = [+targetCell[0], +targetCell[1]];
      player.gameboard.placeShip(size, targetCoordinates, shipName, orientation);
      p1Cells = PopulateP1();
    });
  });}
}

function StartGame () {
  // Check if all ships have been placed before launching the game
  if (player1.gameboard.shipList.length !== 5) {
    throw new Error('You must still place ships!');
  } else {
    InitializeTurn(currentPlayer);
  }
}

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


// ROADMAP
// Player vs COM
// Ajouter isPlaying aux players pour remplacer current player
// Faire placement aléatoire des navires COM
// Ajouter écran de game over

// PvP : alterner 'privateBoard' (joueur en cours) et 'publicBoard' (joueur adverse)
  // -> utiliser 'publicBoard' affiche le brouillard de guerre, 'privateBoard' affiche la position des navires
