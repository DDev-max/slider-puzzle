import { defaultSize } from "../../../data/consts"
import { NearEmptyPieceAndAnotherRowProps } from "../../../data/types"



export function nearEmptyPieceAndAnotherRow({elmnt,emptyPieceIdx,movements,size=defaultSize}:NearEmptyPieceAndAnotherRowProps) {
    const emptyIsOnRightEdge = (emptyPieceIdx + 1) % size === 0
    const emptyIsOnLeftEdge = emptyPieceIdx % size === 0
    const rightPieceOfEmptyPiece = emptyPieceIdx + 1
    const leftPieceOfEmptyPiece = emptyPieceIdx - 1

    if (emptyIsOnRightEdge && movements[rightPieceOfEmptyPiece] == elmnt) return true
    if (emptyIsOnLeftEdge && movements[leftPieceOfEmptyPiece] == elmnt) return true

}
