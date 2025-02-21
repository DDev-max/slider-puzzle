import { selectPiece } from './selectPiece';

const idx = 1;
const setGrabIdx = jest.fn();

it('should change isGrabbingEmptyPiece to true', () => {
  const e = { target: { innerText: '' } };
  const isGrabbingEmptyPiece = { current: false };

  selectPiece({ e, idx, isGrabbingEmptyPiece, setGrabIdx });
  expect(isGrabbingEmptyPiece.current).toBe(true);
  expect(setGrabIdx).toHaveBeenCalledWith(idx);
});

it('shouldnt change isGrabbingEmptyPiece to false', () => {
  const e = { target: { innerText: '4' } };
  const isGrabbingEmptyPiece = { current: true };

  selectPiece({ e, idx, isGrabbingEmptyPiece, setGrabIdx });
  expect(isGrabbingEmptyPiece.current).toBe(false);
  expect(setGrabIdx).toHaveBeenCalledWith(idx);
});
