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

it('should place a ship by from its starting coordinates', () => {
  let newBoard = Gameboard();
  newBoard.placeShip('Destroyer', 3, [0,0]);
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
  newBoard.placeShip('Destroyer', 3, [0,0], 'ver');
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
  newBoard.placeShip('Destroyer', 3, [0,0]);
  expect(newBoard.isValid(3, [0,0])).toBe(false);
});

it.skip('should thow an error if a ship overlaps another one', () => {
  let newBoard = Gameboard();
  newBoard.placeShip('Carrier', 2, [0,0]);
  expect(() => newBoard.placeShip('Destroyer', 3, [0,1])).toThrow();
});
