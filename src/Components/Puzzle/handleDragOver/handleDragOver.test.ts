import type { DragEvent } from 'react';
import { handleDragOver } from './handleDragOver';

const e = { preventDefault: jest.fn() } as unknown as DragEvent<HTMLDivElement>;

describe('dragging', () => {
  it('should allow dragging of the empty piece if it can be moved', () => {
    const isGrabbingEmptyPiece = { current: true };
    const canBeGrabbed = true;

    const isEmptyPiece = false;

    handleDragOver({ canBeGrabbed, e, isEmptyPiece, isGrabbingEmptyPiece });
    expect(e.preventDefault).toHaveBeenCalled();
  });

  it('should allow normal piece to be dragged if it can be moved', () => {
    const isGrabbingEmptyPiece = { current: false };
    const isEmptyPiece = true;
    const canBeGrabbed = true;

    handleDragOver({ canBeGrabbed, e, isEmptyPiece, isGrabbingEmptyPiece });
    expect(e.preventDefault).toHaveBeenCalled();
  });
});

describe('no dragging', () => {
  it('shouldnt allow normal non movable pieces to be dragged', () => {
    const isGrabbingEmptyPiece = { current: false };
    const canBeGrabbed = false;
    const isEmptyPiece = false;

    handleDragOver({ canBeGrabbed, e, isEmptyPiece, isGrabbingEmptyPiece });

    expect(e.preventDefault).not.toHaveBeenCalled();
  });

  it('shouldnt allow non movable empty piece to be dragged', () => {
    const isGrabbingEmptyPiece = { current: true };
    const canBeGrabbed = false;

    const isEmptyPiece = false;

    handleDragOver({ canBeGrabbed, e, isEmptyPiece, isGrabbingEmptyPiece });

    expect(e.preventDefault).not.toHaveBeenCalled();
  });
});
