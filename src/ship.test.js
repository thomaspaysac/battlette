import { Ship } from "./ship";

test('Ship creation', () => {
  expect(Ship(3).hit()).toBe('bla');
});