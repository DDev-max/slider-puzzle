import { defaultSize } from '../../../data/consts'
import type { MovementsState } from '../../../data/globalTypes'

interface IsNearEmptyOtherRowProps extends Pick<MovementsState, 'movements'> {
  emptyPieceIdx: number
  elmnt: number
  size?: number
}

export function isNearEmptyOtherRow({ elmnt, emptyPieceIdx, movements, size = defaultSize }: IsNearEmptyOtherRowProps) {
  const emptyIsOnRightEdge = (emptyPieceIdx + 1) % size === 0
  const emptyIsOnLeftEdge = emptyPieceIdx % size === 0
  const rightPieceOfEmptyPiece = emptyPieceIdx + 1
  const leftPieceOfEmptyPiece = emptyPieceIdx - 1

  if (emptyIsOnRightEdge && movements[rightPieceOfEmptyPiece] == elmnt) return true
  if (emptyIsOnLeftEdge && movements[leftPieceOfEmptyPiece] == elmnt) return true
}
