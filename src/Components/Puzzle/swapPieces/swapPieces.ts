import type { SwapPiecesProps } from '../../../data/types'

export function swapPieces({ oldPieceIdx, setMovements, movements, newPieceIdx }: SwapPiecesProps) {
  const dropSound = new Audio('cheess.mp3')
  dropSound.play()

  const movementsCopy = [...movements]
  const originalOldPiece = movementsCopy[oldPieceIdx]

  movementsCopy[oldPieceIdx] = movementsCopy[newPieceIdx]
  movementsCopy[newPieceIdx] = originalOldPiece

  setMovements(movementsCopy)
}
