import userEvent from '@testing-library/user-event';
import { act, render, screen } from '@testing-library/react';
import Page from './page';
import { useRandomArray } from '../Utils/useRandomArray/useRandomArray';
import { LS_movements } from '../data/consts';

jest.spyOn(global.HTMLMediaElement.prototype, 'play').mockImplementation(() => Promise.resolve());

afterEach(() => {
  localStorage.clear();
});

jest.mock('../Utils/useRandomArray/useRandomArray');
// prettier-ignore
(useRandomArray as jest.MockedFunction<typeof useRandomArray>).mockReturnValue([
    4, 3, 
    2, 1
]);

it('should move a piece when clicking a movable piece', async () => {
  const user = userEvent.setup();
  render(<Page puzzleSize={2} />);

  const movablePiece = screen.getByRole('application', { name: 'Piece 2, position 3 of 4' });
  await user.click(movablePiece);

  expect(movablePiece).toHaveAttribute('aria-label', 'Piece 2,  position 1 of 4');
});

it('shouldnt move a piece when clicking a non movable piece', async () => {
  const user = userEvent.setup();
  render(<Page puzzleSize={2} />);

  const pieceTextRegex = /Piece 1,.*position 4 of 4/;
  const nonMovablePiece = screen.getByRole('application', { name: pieceTextRegex });
  await user.click(nonMovablePiece);

  expect(nonMovablePiece.getAttribute('aria-label')).toMatch(pieceTextRegex);
});

it('should display a message when the puzzle is solved', async () => {
  const user = userEvent.setup();
  (useRandomArray as jest.MockedFunction<typeof useRandomArray>).mockReturnValue([1, 2, 4, 3]);

  render(<Page puzzleSize={2} />);

  const lastPieceToSolve = screen.getByRole('application', { name: 'Piece 3, position 4 of 4' });
  await user.click(lastPieceToSolve);

  const victoryMssg = screen.getByText(/You have solved the puzzle/i);
  expect(victoryMssg).toBeInTheDocument();
});

it('should restart the game by pressing the button', async () => {
  jest.useFakeTimers();
  (useRandomArray as jest.MockedFunction<typeof useRandomArray>).mockReturnValue([4, 3, 2, 1]);
  localStorage.setItem(LS_movements, '1,2,4,3');
  const user = userEvent.setup();
  render(<Page puzzleSize={2} />);

  const stopWatch = screen.getByRole('timer');
  const firstPiece = screen.getByRole('application', { name: 'Piece 1, position 1 of 4' });
  const secondPiece = screen.getByRole('application', { name: 'Piece 2, position 2 of 4' });
  const thirdPiece = screen.getByRole('application', { name: 'Piece 3, position 4 of 4' });
  const restartBtn = screen.getByRole('button', { name: /Restart game/i });

  act(() => {
    jest.advanceTimersByTime(5000);
  });

  expect(stopWatch).toHaveTextContent(/0 m:5 s/);
  jest.useRealTimers();

  await user.click(restartBtn);

  expect(firstPiece.getAttribute('aria-label')).toMatch(/Piece 1,.*position 4 of 4/i);
  expect(secondPiece.getAttribute('aria-label')).toMatch(/Piece 2,.*position 3 of 4/i);
  expect(thirdPiece.getAttribute('aria-label')).toMatch(/Piece 3,.*position 2 of 4/i);
  expect(stopWatch).toHaveTextContent(/0 m:0 s/);
});
