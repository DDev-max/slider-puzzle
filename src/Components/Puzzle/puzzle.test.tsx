import { render, screen } from '@testing-library/react';
import { Puzzle } from './Puzzle';

HTMLMediaElement.prototype.play = jest.fn();

const movements = [1, 2, 3, 4];
const setMovements = jest.fn();

it('should render a puzzle', () => {
  render(<Puzzle movements={movements} setMovements={setMovements} size={2} />);

  const allNormalPieces = screen.getAllByRole('application', { name: /^Piece ([1-4]), position ([1-4]) of 4$/ });
  const emptyPiece = screen.getByRole('application', { name: 'Empty space, you can put a nearby piece here.' });

  expect(allNormalPieces).toHaveLength(3);
  expect(emptyPiece).toBeInTheDocument();
  expect(emptyPiece).toHaveTextContent('');
});

test('movable pieces should have draggable attribute', () => {
  render(<Puzzle movements={movements} setMovements={setMovements} size={2} />);

  const firstPiece = screen.getByRole('application', { name: 'Piece 1, position 1 of 4' });
  const secondPiece = screen.getByRole('application', { name: 'Piece 2, position 2 of 4' });
  const thirdPiece = screen.getByRole('application', { name: 'Piece 3, position 3 of 4' });
  const emptyPiece = screen.getByRole('application', { name: 'Empty space, you can put a nearby piece here.' });

  expect(firstPiece).toHaveAttribute('draggable', 'false');

  expect(secondPiece).toHaveAttribute('draggable', 'true');
  expect(thirdPiece).toHaveAttribute('draggable', 'true');
  expect(emptyPiece).toHaveAttribute('draggable', 'true');
});
