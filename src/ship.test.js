import { Ship } from "./ship";

describe('Create ship', () => {
  it('Create a ship of size 3', () => {
    expect(Ship(3).size).toBe(3);
  });

  it('Ship is sunk if no hit points left', () => {
    let newShip = Ship(2);
    newShip.hit();
    newShip.hit();
    expect(newShip.isSunk()).toBeTruthy();
  });
});