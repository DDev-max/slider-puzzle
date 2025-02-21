import { handleKeyDown } from './handleKeyDown';
import { swapPieces } from '../swapPieces/swapPieces';

jest.mock('../swapPieces/swapPieces');

const movements = [1, 2, 3, 4];
const allPiecesRef = { current: [{ focus: jest.fn() }, { focus: jest.fn() }, { focus: jest.fn() }] };
const bottomPiece = 5;
const leftPiece = 2;
const rightPiece = 4;
const topPiece = 1;
const setMovements = jest.fn();
const emptyPieceIdx = 3;
const idx = 4;
const canBeGrabbed = true;

describe('swap pieces', () => {
  it('should swap pieces if enter is pressed and piece is movable', () => {
    const e = { key: 'Enter' };

    handleKeyDown({ allPiecesRef, bottomPiece, canBeGrabbed, e, emptyPieceIdx, idx, leftPiece, movements, rightPiece, setMovements, topPiece });

    expect(swapPieces).toHaveBeenCalledWith({ movements, setMovements, newPieceIdx: emptyPieceIdx, oldPieceIdx: idx });
  });

  it('shouldnt swap pieces if piece is not movable', () => {
    const e = { key: 'Enter' };
    const canBeGrabbed = false;

    handleKeyDown({ allPiecesRef, bottomPiece, canBeGrabbed, e, emptyPieceIdx, idx, leftPiece, movements, rightPiece, setMovements, topPiece });

    expect(swapPieces).not.toHaveBeenCalled();
  });
});

describe('focus piece', () => {
  it('should focus piece on the left if arrow left is pressed', () => {
    const leftPiece = 1;
    const idx = 2;
    const e = { key: 'ArrowLeft' };
    handleKeyDown({ allPiecesRef, bottomPiece, canBeGrabbed, e, emptyPieceIdx, idx, leftPiece, movements, rightPiece, setMovements, topPiece });

    expect(allPiecesRef.current[0].focus).toHaveBeenCalled();
    expect(allPiecesRef.current[1].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[2].focus).not.toHaveBeenCalled();
  });

  it('should focus piece on the right if arrow right is pressed', () => {
    const rightPiece = 2;
    const idx = 0;
    const e = { key: 'ArrowRight' };
    handleKeyDown({ allPiecesRef, bottomPiece, canBeGrabbed, e, emptyPieceIdx, idx, leftPiece, movements, rightPiece, setMovements, topPiece });

    expect(allPiecesRef.current[1].focus).toHaveBeenCalled();
    expect(allPiecesRef.current[0].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[2].focus).not.toHaveBeenCalled();
  });

  it('should focus top piece if arrow up is pressed', () => {
    const idx = 3;
    const topPiece = 2;
    const e = { key: 'ArrowUp' };
    handleKeyDown({ allPiecesRef, bottomPiece, canBeGrabbed, e, emptyPieceIdx, idx, leftPiece, movements, rightPiece, setMovements, topPiece });

    expect(allPiecesRef.current[1].focus).toHaveBeenCalled();
    expect(allPiecesRef.current[0].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[2].focus).not.toHaveBeenCalled();
  });

  it('should focus bottom piece if arrow down is pressed', () => {
    const idx = 0;
    const bottomPiece = 3;
    const e = { key: 'ArrowDown' };
    handleKeyDown({ allPiecesRef, bottomPiece, canBeGrabbed, e, emptyPieceIdx, idx, leftPiece, movements, rightPiece, setMovements, topPiece });

    expect(allPiecesRef.current[2].focus).toHaveBeenCalled();
    expect(allPiecesRef.current[0].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[1].focus).not.toHaveBeenCalled();
  });
});

describe('no focus', () => {
  it('shouldnt focus on any piece if no index was found when arrow left is pressed', () => {
    const leftPiece = 99;
    const e = { key: 'ArrowLeft' };
    handleKeyDown({ allPiecesRef, bottomPiece, canBeGrabbed, e, emptyPieceIdx, idx, leftPiece, movements, rightPiece, setMovements, topPiece });

    expect(allPiecesRef.current[0].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[1].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[2].focus).not.toHaveBeenCalled();
  });

  it('shouldnt focus on any piece if no index was found when arrow right is pressed', () => {
    const rightPiece = 99;
    const e = { key: 'ArrowRight' };
    handleKeyDown({ allPiecesRef, bottomPiece, canBeGrabbed, e, emptyPieceIdx, idx, leftPiece, movements, rightPiece, setMovements, topPiece });

    expect(allPiecesRef.current[0].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[1].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[2].focus).not.toHaveBeenCalled();
  });

  it('shouldnt focus on any piece if no index was found when arrow down is pressed', () => {
    const bottomPiece = 99;
    const e = { key: 'ArrowDown' };
    handleKeyDown({ allPiecesRef, bottomPiece, canBeGrabbed, e, emptyPieceIdx, idx, leftPiece, movements, rightPiece, setMovements, topPiece });

    expect(allPiecesRef.current[0].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[1].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[2].focus).not.toHaveBeenCalled();
  });

  it('shouldnt focus on any piece if no index was found when arrow up is pressed', () => {
    const topPiece = 99;
    const e = { key: 'ArrowUp' };
    handleKeyDown({ allPiecesRef, bottomPiece, canBeGrabbed, e, emptyPieceIdx, idx, leftPiece, movements, rightPiece, setMovements, topPiece });

    expect(allPiecesRef.current[0].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[1].focus).not.toHaveBeenCalled();
    expect(allPiecesRef.current[2].focus).not.toHaveBeenCalled();
  });
});
