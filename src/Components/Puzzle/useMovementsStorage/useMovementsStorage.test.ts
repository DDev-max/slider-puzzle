import { renderHook } from '@testing-library/react';
import { LS_movements } from '../../../data/consts';
import { useMovementsStorage } from './useMovementsStorage';

jest.mock('../../../Utils/useRandomArray/useRandomArray', () => ({
  useRandomArray: jest.fn().mockReturnValue([3, 4]),
}));

const setMovements = jest.fn();
const movements = [1, 2];

it('should recover previous game if it exists', () => {
  const previousGame = [2, 1];

  jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
    if (key === LS_movements) {
      return previousGame.toString();
    }
    return null;
  });

  renderHook(useMovementsStorage, { initialProps: { movements, setMovements } });

  expect(setMovements).toHaveBeenCalledWith(previousGame);
});

it('should call setMovements with a random array if theres no previous game', () => {
  const previousGame = null;

  jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
    if (key === LS_movements) {
      return previousGame;
    }
    return null;
  });

  renderHook(useMovementsStorage, { initialProps: { movements, setMovements } });

  expect(setMovements).toHaveBeenCalledWith([3, 4]);
});

it('should save movements in storage', () => {
  const setItemMock = jest.spyOn(Storage.prototype, 'setItem');

  renderHook(useMovementsStorage, { initialProps: { movements, setMovements } });

  expect(setItemMock).toHaveBeenCalledTimes(1);
});

it('shouldnt save movements if theres no array', () => {
  const movements = [];
  const setItemMock = jest.spyOn(Storage.prototype, 'setItem');

  renderHook(useMovementsStorage, { initialProps: { movements, setMovements } });

  expect(setItemMock).not.toHaveBeenCalled();
});
