import { isNearEmptyOtherRow } from './isNearEmptyOtherRow';

it('should return true if empty piece is on right edge and current piece is to the right', () => {
  const size = 3;
  //prettier-ignore
  const movements = [
    2, 1, 9, 
    3, 4, 5, 
    6, 7, 8
  ];
  const elmnt = 3;
  const emptyPieceIdx = 2;

  const differentRow = isNearEmptyOtherRow({ elmnt, emptyPieceIdx, movements, size });

  expect(differentRow).toBeTruthy();
});

it('should return true if empty piece is on left edge and current piece is to the left', () => {
  const size = 3;
  //prettier-ignore
  const movements = [
    2, 1, 3, 
    9, 4, 5, 
    6, 7, 8
  ];
  const elmnt = 3;
  const emptyPieceIdx = 3;

  const differentRow = isNearEmptyOtherRow({ elmnt, emptyPieceIdx, movements, size });

  expect(differentRow).toBeTruthy();
});

it('should return false if empty piece is not on the edge', () => {
  const size = 3;
  //prettier-ignore
  const movements = [
    2, 1, 3, 
    4, 9, 5, 
    6, 7, 8
  ];
  const elmnt = 4;
  const emptyPieceIdx = 4;

  const differentRow = isNearEmptyOtherRow({ elmnt, emptyPieceIdx, movements, size });

  expect(differentRow).toBeFalsy();
});

it('should return false if empty piece is on the edge but current piece is not next to it', () => {
  const size = 3;
  //prettier-ignore
  const movements = [
    2, 1, 3, 
    4, 5, 9, 
    6, 7, 8
  ];
  const elmnt = 3;
  const emptyPieceIdx = 5;

  const differentRow = isNearEmptyOtherRow({ elmnt, emptyPieceIdx, movements, size });

  expect(differentRow).toBeFalsy();
});
