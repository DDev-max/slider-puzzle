import { render, screen } from '@testing-library/react';
import { Header } from './Header';

const movements = [];
const setMovements = jest.fn();
const setVictory = jest.fn();

it('should render a header', () => {
  render(<Header movements={movements} setMovements={setMovements} setVictory={setVictory} victory={false} />);

  const header = screen.getByRole('banner');
  const timer = screen.getByRole('timer');
  const reset = screen.getByText(/Restart game/i);
  const victory = screen.queryByRole('alert');

  expect(header).toBeInTheDocument();
  expect(timer).toBeInTheDocument();
  expect(reset).toBeInTheDocument();
  expect(victory).toBeNull();
});

it('should render victory', () => {
  render(<Header movements={movements} setMovements={setMovements} setVictory={setVictory} victory={true} />);
  const victoryMssg = screen.getByText(/You have solved the puzzle/i);
  expect(victoryMssg).toBeInTheDocument();
});
