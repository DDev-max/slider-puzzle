import type { MovementsState } from '../../../data/globalTypes'

interface SwapPiecesProps extends MovementsState {
  oldPieceIdx: number
  newPieceIdx: number
}

export function swapPieces({ oldPieceIdx, setMovements, movements, newPieceIdx }: SwapPiecesProps) {
  const dropSound = new Audio('cheess.mp3')
  dropSound.play()

  const movementsCopy = [...movements]
  const originalOldPiece = movementsCopy[oldPieceIdx]

  movementsCopy[oldPieceIdx] = movementsCopy[newPieceIdx]
  movementsCopy[newPieceIdx] = originalOldPiece

  setMovements(movementsCopy)
}
