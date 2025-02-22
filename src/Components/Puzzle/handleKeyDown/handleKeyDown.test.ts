import { handleKeyDown } from './handleKeyDown';
import { swapPieces } from '../swapPieces/swapPieces';
import type { KeyboardEvent, MutableRefObject } from 'react';

jest.mock('../swapPieces/swapPieces');

const movements = [1, 2, 3, 4];
const allPiecesRef = { current: [{ focus: jest.fn() }, { focus: jest.fn() }, { focus: jest.fn() }] } as unknown as MutableRefObject<HTMLDivElement[]>;
const setMovements = jest.fn();
const emptyPieceIdx = 3;
const idx = 4;
const canBeGrabbed = true;

const adjacentPieces = {
  bottomPiece: 5,
  leftPiece: 2,
  rightPiece: 4,
  topPiece: 1,
};

describe('swap pieces', () => {
  it('should swap pieces if enter is pressed and piece is movable', () => {
    const e = { key: 'Enter' } as KeyboardEvent<HTMLDivElement>;

    handleKeyDown({ adjacentPieces, allPiecesRef, canBeGrabbed, e, emptyPieceIdx, idx, movements, setMovements });

    expect(swapPieces).toHaveBeenCalledWith({ movements, setMovements, newPieceIdx: emptyPieceIdx, oldPieceIdx: idx });
  });

  it('shouldnt swap pieces if piece is not movable', () => {
    const e = { key: 'Enter' } as KeyboardEvent<HTMLDivElement>;
    const canBeGrabbed = false;

    handleKeyDown({ adjacentPieces, allPiecesRef, canBeGrabbed, e, emptyPieceIdx, idx, movements, setMovements });

    expect(swapPieces).not.toHaveBeenCalled();
  });
});

describe('focus piece', () => {
  it('should focus piece on the left if arrow left is pressed', () => {
    adjacentPieces.leftPiece = 1;
    const idx = 2;
    const e = { key: 'ArrowLeft' } as KeyboardEvent<HTMLDivElement>;
    handleKeyDown({ adjacentPieces, allPiecesRef, canBeGrabbed, e, emptyPieceIdx, idx, movements, setMovements });

    expect(allPiecesRef.current[0].focus).toHaveBeenCalled();
    expect(allPiecesRef.current[1].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[2].focus).not.toHaveBeenCalled();
  });

  it('should focus piece on the right if arrow right is pressed', () => {
    adjacentPieces.rightPiece = 2;
    const idx = 0;
    const e = { key: 'ArrowRight' } as KeyboardEvent<HTMLDivElement>;
    handleKeyDown({ adjacentPieces, allPiecesRef, canBeGrabbed, e, emptyPieceIdx, idx, movements, setMovements });

    expect(allPiecesRef.current[1].focus).toHaveBeenCalled();
    expect(allPiecesRef.current[0].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[2].focus).not.toHaveBeenCalled();
  });

  it('should focus top piece if arrow up is pressed', () => {
    const idx = 3;
    adjacentPieces.topPiece = 2;
    const e = { key: 'ArrowUp' } as KeyboardEvent<HTMLDivElement>;
    handleKeyDown({ adjacentPieces, allPiecesRef, canBeGrabbed, e, emptyPieceIdx, idx, movements, setMovements });

    expect(allPiecesRef.current[1].focus).toHaveBeenCalled();
    expect(allPiecesRef.current[0].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[2].focus).not.toHaveBeenCalled();
  });

  it('should focus bottom piece if arrow down is pressed', () => {
    const idx = 0;
    adjacentPieces.bottomPiece = 3;
    const e = { key: 'ArrowDown' } as KeyboardEvent<HTMLDivElement>;
    handleKeyDown({ adjacentPieces, allPiecesRef, canBeGrabbed, e, emptyPieceIdx, idx, movements, setMovements });

    expect(allPiecesRef.current[2].focus).toHaveBeenCalled();
    expect(allPiecesRef.current[0].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[1].focus).not.toHaveBeenCalled();
  });
});

describe('no focus', () => {
  it('shouldnt focus on any piece if no index was found when arrow left is pressed', () => {
    adjacentPieces.leftPiece = 99;
    const e = { key: 'ArrowLeft' } as KeyboardEvent<HTMLDivElement>;
    handleKeyDown({ adjacentPieces, allPiecesRef, canBeGrabbed, e, emptyPieceIdx, idx, movements, setMovements });

    expect(allPiecesRef.current[0].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[1].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[2].focus).not.toHaveBeenCalled();
  });

  it('shouldnt focus on any piece if no index was found when arrow right is pressed', () => {
    adjacentPieces.rightPiece = 99;
    const e = { key: 'ArrowRight' } as KeyboardEvent<HTMLDivElement>;
    handleKeyDown({ adjacentPieces, allPiecesRef, canBeGrabbed, e, emptyPieceIdx, idx, movements, setMovements });

    expect(allPiecesRef.current[0].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[1].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[2].focus).not.toHaveBeenCalled();
  });

  it('shouldnt focus on any piece if no index was found when arrow down is pressed', () => {
    adjacentPieces.bottomPiece = 99;
    const e = { key: 'ArrowDown' } as KeyboardEvent<HTMLDivElement>;
    handleKeyDown({ adjacentPieces, allPiecesRef, canBeGrabbed, e, emptyPieceIdx, idx, movements, setMovements });

    expect(allPiecesRef.current[0].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[1].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[2].focus).not.toHaveBeenCalled();
  });

  it('shouldnt focus on any piece if no index was found when arrow up is pressed', () => {
    adjacentPieces.topPiece = 99;
    const e = { key: 'ArrowUp' } as KeyboardEvent<HTMLDivElement>;
    handleKeyDown({ adjacentPieces, allPiecesRef, canBeGrabbed, e, emptyPieceIdx, idx, movements, setMovements });

    expect(allPiecesRef.current[0].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[1].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[2].focus).not.toHaveBeenCalled();
  });
});
