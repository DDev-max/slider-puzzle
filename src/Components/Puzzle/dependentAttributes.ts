import type { HTMLAttributes, MutableRefObject } from 'react'
import { swapPieces } from './swapPieces/swapPieces'
import type { MovementsState } from '../../data/globalTypes'
import { handleDragOver } from './handleDragOver/handleDragOver'
import { handleKeyDown } from './handleKeyDown/handleKeyDown'
import { defaultSize } from '../../data/consts'
import { isNearEmptyOtherRow } from './isNearEmptyOtherRow/isNearEmptyOtherRow'

interface DependentAttributesProps extends MovementsState {
  idx: number
  emptyPiece: number
  elmnt: number
  isGrabbingEmptyPiece: MutableRefObject<boolean>
  grabIdx: number
  allPiecesRef: MutableRefObject<HTMLDivElement[]>
  size?: number
}

export function dependentAttributes({
  idx,
  emptyPiece,
  elmnt,
  movements,
  isGrabbingEmptyPiece,
  grabIdx,
  setMovements,
  allPiecesRef,
  size = defaultSize,
}: DependentAttributesProps): HTMLAttributes<HTMLDivElement> {
  const isEmptyPiece = movements[idx] == emptyPiece

  const emptyPieceIdx = movements.findIndex(elmnt => elmnt == emptyPiece)

  const leftPiece = movements[idx - 1]
  const rightPiece = movements[idx + 1]
  const topPiece = movements[idx - size]
  const bottomPiece = movements[idx + size]

  const adjacentPieces = { leftPiece, rightPiece, topPiece, bottomPiece }

  const emptyPieceIsNear = rightPiece == emptyPiece || leftPiece == emptyPiece || isEmptyPiece || topPiece == emptyPiece || bottomPiece == emptyPiece

  const canBeGrabbed = !isNearEmptyOtherRow({ elmnt, emptyPieceIdx, movements, size }) && emptyPieceIsNear

  return {
    draggable: canBeGrabbed,
    onClick: canBeGrabbed && !isEmptyPiece ? () => swapPieces({ movements, setMovements, newPieceIdx: emptyPieceIdx, oldPieceIdx: idx }) : undefined,
    onDragOver: e => handleDragOver({ canBeGrabbed, e, isEmptyPiece, isGrabbingEmptyPiece }),
    onKeyDown: e => handleKeyDown({ allPiecesRef, canBeGrabbed, e, emptyPieceIdx, idx, movements, setMovements, adjacentPieces }),
    className: `puzzle__piece 
                    ${canBeGrabbed && 'puzzle__piece--movable'}
                    ${elmnt == emptyPiece ? 'puzzle__piece--empty' : `puzzle__piece${elmnt}`}
                    ${grabIdx == idx && 'puzzle__piece--grabbing'}`,
  }
}
