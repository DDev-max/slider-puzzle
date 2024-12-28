import cheess from "../../assets/cheess.mp3";


export function exchangePieces ({ oldPieceIdx, setMovements, movements, newPieceIdx }) { 
    console.log("viejaIdx: ", oldPieceIdx, "nuevaIdx :", newPieceIdx);
    
    const dropSound = new Audio(cheess)
    dropSound.play()

    const movementsCopy = [...movements]
    const originalOldPiece = movementsCopy[oldPieceIdx]

    movementsCopy[oldPieceIdx] = movementsCopy[newPieceIdx]
    movementsCopy[newPieceIdx] = originalOldPiece

    //se cambia la pieza que se esta agarrando, por la que se pone encima

    setMovements(movementsCopy)
    
}