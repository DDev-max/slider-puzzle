import { HandleKeyDownProps } from "../../../data/types";
import { swapPieces } from "../swapPieces/swapPieces";

export function handleKeyDown({allPiecesRef,bottomPiece,canBeGrabbed,e,emptyPieceIdx,idx,leftPiece,movements,rightPiece,setMovements,topPiece}:HandleKeyDownProps) {

    if (e.key == "Enter" && canBeGrabbed) {
        swapPieces({ movements, setMovements, newPieceIdx: emptyPieceIdx, oldPieceIdx: idx })
    }

    if (e.key === "ArrowLeft") {
        const pieceIdx = movements.findIndex(piece => piece == leftPiece);
        if (pieceIdx < 0) return
        allPiecesRef.current[pieceIdx].focus();

    } else if (e.key === "ArrowRight") {
        const pieceIdx = movements.findIndex(piece => piece == rightPiece);
        if (pieceIdx < 0) return
        allPiecesRef.current[pieceIdx].focus();

    } else if (e.key === "ArrowDown") {
        const pieceIdx = movements.findIndex(piece => piece == bottomPiece);
        if (pieceIdx < 0) return
        allPiecesRef.current[pieceIdx].focus();

    } else if (e.key === "ArrowUp") {
        const pieceIdx = movements.findIndex(piece => piece == topPiece);
        if (pieceIdx < 0) return
        allPiecesRef.current[pieceIdx].focus();
    }

}
