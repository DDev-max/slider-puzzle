import { HTMLAttributes } from "react"
import { swapPieces } from "./swapPieces/swapPieces"
import { DependentAttributesProps } from "../../data/types"
import { nearEmptyPieceAndAnotherRow } from "./nearEmptyPieceAndAnotherRow/nearEmptyPieceAndAnotherRow"
import { handleDragOver } from "./handleDragOver/handleDragOver"
import { handleKeyDown } from "./handleKeyDown/handleKeyDown"
import { defaultSize } from "../../data/consts"



export function dependentAttributes(
    { idx, emptyPiece, elmnt, movements,
        isGrabbingEmptyPiece, grabIdx,
        setMovements, allPiecesRef, size=defaultSize
    }: DependentAttributesProps
): HTMLAttributes<HTMLDivElement> {    

    const isEmptyPiece = movements[idx] == emptyPiece

    const emptyPieceIdx = movements.findIndex(elmnt => elmnt == emptyPiece)


    const leftPiece = movements[idx - 1]
    const rightPiece = movements[idx + 1]
    const topPiece = movements[idx - size]
    const bottomPiece = movements[idx + size]

    const emptyPieceIsNear = rightPiece == emptyPiece || leftPiece == emptyPiece || isEmptyPiece || topPiece == emptyPiece || bottomPiece == emptyPiece

    const canBeGrabbed = !nearEmptyPieceAndAnotherRow({elmnt,emptyPieceIdx,movements,size}) && emptyPieceIsNear    


    return {
        draggable: canBeGrabbed,
        onClick: canBeGrabbed && !isEmptyPiece ? ()=> swapPieces({ movements, setMovements, newPieceIdx: emptyPieceIdx, oldPieceIdx: idx }) : undefined ,
        onDragOver: (e)=> handleDragOver({canBeGrabbed,e,isEmptyPiece,isGrabbingEmptyPiece}),
        onKeyDown: (e)=> handleKeyDown({allPiecesRef,bottomPiece,canBeGrabbed,e,emptyPieceIdx,idx,leftPiece,movements,
                   rightPiece,setMovements,  topPiece}),
        className: `puzzle__piece 
                    ${canBeGrabbed && "puzzle__piece--movable"}
                    ${elmnt == emptyPiece ? "puzzle__piece--empty" : `puzzle__pieza${elmnt}`}
                    ${grabIdx == idx && "puzzle__piece--grabbing"}`
    }
}


