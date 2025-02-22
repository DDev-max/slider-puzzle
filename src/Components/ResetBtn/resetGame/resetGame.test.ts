import { restartGame } from './resetGame';

const randomArray = [3, 2, 1, 4];

const setMovements = jest.fn();
const setRefresh = jest.fn();
const setStopWatch = jest.fn();
const setVictory = jest.fn();

it('should restart the game', () => {
  restartGame({ randomArray, setMovements, setRefresh, setStopWatch, setVictory });

  expect(setStopWatch).toHaveBeenCalledWith(0);
  expect(setMovements).toHaveBeenCalledWith(randomArray);
  expect(setVictory).toHaveBeenCalledWith(false);
});
