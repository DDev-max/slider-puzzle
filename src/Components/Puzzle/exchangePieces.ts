export function exchangePieces ({ oldPieceIdx, setMovements, movements, newPieceIdx }) { 
    
    const dropSound = new Audio( "cheess.mp3")
    dropSound.play()

    const movementsCopy = [...movements]
    const originalOldPiece = movementsCopy[oldPieceIdx]

    movementsCopy[oldPieceIdx] = movementsCopy[newPieceIdx]
    movementsCopy[newPieceIdx] = originalOldPiece

    setMovements(movementsCopy)
    
}