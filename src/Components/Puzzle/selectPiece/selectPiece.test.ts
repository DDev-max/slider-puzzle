import type { DragEvent } from 'react';
import { selectPiece } from './selectPiece';

const idx = 1;
const setGrabIdx = jest.fn();

it('should change isGrabbingEmptyPiece to true', () => {
  const divMock = document.createElement('div');
  divMock.innerText = '';

  const e = { target: divMock } as unknown as DragEvent<HTMLDivElement>;
  const isGrabbingEmptyPiece = { current: false };

  selectPiece({ e, idx, isGrabbingEmptyPiece, setGrabIdx });
  expect(isGrabbingEmptyPiece.current).toBe(true);
  expect(setGrabIdx).toHaveBeenCalledWith(idx);
});

it('shouldnt change isGrabbingEmptyPiece to false', () => {
  const divMock = document.createElement('div');
  divMock.innerText = '4';

  const e = { target: divMock } as unknown as DragEvent<HTMLDivElement>;
  const isGrabbingEmptyPiece = { current: true };

  selectPiece({ e, idx, isGrabbingEmptyPiece, setGrabIdx });
  expect(isGrabbingEmptyPiece.current).toBe(false);
  expect(setGrabIdx).toHaveBeenCalledWith(idx);
});
