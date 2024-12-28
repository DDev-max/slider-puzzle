export function selectPiece({ idx, e, setGrabIdx, isGrabbingEmptyPiece }) {
    
    isGrabbingEmptyPiece.current = e.target.innerText == ""
    ? true
    : false


    setGrabIdx(idx)

}
