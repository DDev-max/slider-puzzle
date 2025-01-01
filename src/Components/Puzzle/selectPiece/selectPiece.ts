import { SelectPieceProps } from "../../../data/types"

export function selectPiece({ idx, e, setGrabIdx, isGrabbingEmptyPiece}: SelectPieceProps) {
    
    isGrabbingEmptyPiece.current = e.target.innerText == ""
    ? true
    : false

    setGrabIdx(idx)

}
