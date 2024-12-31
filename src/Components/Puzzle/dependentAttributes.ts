import { HTMLAttributes } from "react"
import { exchangePieces } from "./exchangePieces"
import { DependentAttributesProps } from "../../data/types"



export function dependentAttributes(
    { idx, emptyPiece, elmnt, movements,
        isGrabbingEmptyPiece, size, grabIdx,
        setMovements, allPiecesRef
    }: DependentAttributesProps
): HTMLAttributes<HTMLDivElement> {

    const isEmptyPiece = movements[idx] == emptyPiece

    const emptyPieceIdx = movements.findIndex(elmnt => elmnt == emptyPiece)

    const emptyIsOnRightEdge = (emptyPieceIdx + 1) % size == 0
    const emptyIsOnLeftEdge = emptyPieceIdx % size == 0



    const leftPiece = movements[idx - 1]
    const rightPiece = movements[idx + 1]
    const topPiece = movements[idx - size]
    const bottomPiece = movements[idx + size]

    const piezaVaciaCerca = rightPiece == emptyPiece || leftPiece == emptyPiece || isEmptyPiece || topPiece == emptyPiece || bottomPiece == emptyPiece


    const rightPieceOfEmptyPiece = emptyPieceIdx + 1
    const leftPieceOfEmptyPiece = emptyPieceIdx - 1





    function isDivided() {

        if (emptyIsOnRightEdge && movements[rightPieceOfEmptyPiece] == elmnt) {

            return true
        }

        if (emptyIsOnLeftEdge && movements[leftPieceOfEmptyPiece] == elmnt) {
            return true
        }

    }

    const canBeGrabbed = !isDivided() && piezaVaciaCerca

    function handleDragOver(e) {
        if (isGrabbingEmptyPiece.current && canBeGrabbed) {
            e.preventDefault()
        }

        if (!isGrabbingEmptyPiece.current && isEmptyPiece) {
            e.preventDefault()
        }
    }

    function handleKeyDown(e) {

        if (e.key == "Enter" && canBeGrabbed) {
            exchangePieces({ movements, setMovements, newPieceIdx: emptyPieceIdx, oldPieceIdx: idx })
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


    function handleClick() {
        if (!canBeGrabbed) return
        exchangePieces({ movements, setMovements, newPieceIdx: emptyPieceIdx, oldPieceIdx: idx })
    }


    return {
        draggable: canBeGrabbed,
        onClick: handleClick,
        onDragOver: handleDragOver,
        onKeyDown: handleKeyDown,
        className: `puzzle__piece 
                    ${canBeGrabbed && "puzzle__piece--movable"}
                    ${elmnt == emptyPiece ? "puzzle__piece--empty" : `puzzle__pieza${elmnt}`}
                    ${grabIdx == idx && "puzzle__piece--grabbing"}`
    }
}

