import { Gameboard } from "./gameboard";


it('should generate an empty starting board', () => {
  let newBoard = Gameboard();
  expect(newBoard.board).toEqual(
    [ [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ]  ]);
});

it('should place a ship from its starting coordinates', () => {
  let newBoard = Gameboard();
  newBoard.placeShip(3, [0,0], 'Destroyer');
  expect(newBoard.board).toEqual(
    [ ['Destroyer', 'Destroyer', 'Destroyer', , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ]  ]);
});

it('should place a ship in the vertical orientation', () => {
  let newBoard = Gameboard();
  newBoard.placeShip(3, [0,0], 'Destroyer', 'ver');
  expect(newBoard.board).toEqual(
    [ ['Destroyer', , , , , , , , ], 
      ['Destroyer', , , , , , , , ], 
      ['Destroyer', , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ], 
      [, , , , , , , , ]  ]
  )
});

it('should throw an error if the ship goes out of bounds', () => {
  let newBoard = Gameboard();
  expect(newBoard.isValid(3, [0,8])).toBe(false);
});

it('should check if a ship is already in place', () => {
  let newBoard = Gameboard();
  newBoard.placeShip(3, [0,0], 'Destroyer');
  expect(newBoard.isValid(3, [0,0])).toBe(false);
});

it('should thow an error if a ship overlaps another one', () => {
  let newBoard = Gameboard();
  newBoard.placeShip(2, [0,0], 'Carrier');
  expect(() => newBoard.placeShip(3, [0,1], 'Destroyer')).toThrow();
});

it('should return miss message if attacking an empty square', () => {
  let newBoard = Gameboard();
  newBoard.placeShip(2, [0,0], 'Carrier');
  expect(newBoard.receiveAttack([0,4])).toBe('You missed');
});

it('should return error message if trying to attack twice on the same spot', () => {
  let newBoard = Gameboard();
  newBoard.placeShip(2, [0,0], 'Carrier');
  newBoard.receiveAttack([0,4]);
  expect(newBoard.receiveAttack([0,4])).toBe('You cannot attack the same spot twice');
});

it('should return success message if attacking ship', () => {
  let newBoard = Gameboard();
  newBoard.placeShip(2, [0,0], 'Carrier');
  expect(newBoard.receiveAttack([0,1])).toBe('Carrier has been hit, 1 hit(s) left');
});

it('should return sunk message if the ship is sunk', () => {
  let newBoard = Gameboard();
  newBoard.placeShip(2, [0,0], 'Carrier');
  newBoard.receiveAttack([0,0]);
  expect(newBoard.receiveAttack([0,1])).toBe('The ship has sunk');
});

it('should return the correct board status: ships left', () => {
  let newBoard = Gameboard();
  newBoard.placeShip(2, [0,0], 'Carrier');
  newBoard.receiveAttack([0,0]);
  expect(newBoard.getStatus()).toBe('There are still ships on the board');
});

it('should return correct board status: no more ships', () => {
  let newBoard = Gameboard();
  newBoard.placeShip(2, [0,0], 'Carrier');
  newBoard.receiveAttack([0,0]);
  newBoard.receiveAttack([0,1]);
  expect(newBoard.getStatus()).toBe('All ships destroyed');
});