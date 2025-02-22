import type { KeyboardEvent, MutableRefObject } from 'react'
import { swapPieces } from '../swapPieces/swapPieces'
import type { MovementsState } from '../../../data/globalTypes'

interface AdjacentPiecesObj {
  leftPiece: number
  rightPiece: number
  topPiece: number
  bottomPiece: number
}

interface HandleKeyDownProps extends MovementsState {
  e: KeyboardEvent<HTMLDivElement>
  idx: number
  emptyPieceIdx: number
  adjacentPieces: AdjacentPiecesObj
  canBeGrabbed: boolean
  allPiecesRef: MutableRefObject<HTMLDivElement[]>
}

export function handleKeyDown({ adjacentPieces, allPiecesRef, canBeGrabbed, e, emptyPieceIdx, idx, movements, setMovements }: HandleKeyDownProps) {
  const { bottomPiece, leftPiece, rightPiece, topPiece } = adjacentPieces

  const eventAndPieceObj = {
    ArrowLeft: leftPiece,
    ArrowRight: rightPiece,
    ArrowDown: bottomPiece,
    ArrowUp: topPiece,
  }

  if (e.key == 'Enter' && canBeGrabbed) {
    swapPieces({ movements, setMovements, newPieceIdx: emptyPieceIdx, oldPieceIdx: idx })
  }

  for (const arrowEvent in eventAndPieceObj) {
    if (e.key === arrowEvent) {
      const pieceIdx = movements.findIndex(piece => piece == eventAndPieceObj[arrowEvent])
      if (pieceIdx < 0) return
      allPiecesRef.current[pieceIdx].focus()
    }
  }
}
