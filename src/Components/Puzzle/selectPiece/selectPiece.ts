import type { Dispatch, DragEvent, MutableRefObject, SetStateAction } from 'react'

interface SelectPieceProps {
  idx: number
  e: DragEvent<HTMLDivElement>
  setGrabIdx: Dispatch<SetStateAction<number>>
  isGrabbingEmptyPiece: MutableRefObject<boolean>
}

export function selectPiece({ idx, e, setGrabIdx, isGrabbingEmptyPiece }: SelectPieceProps) {
  if (e.target instanceof HTMLDivElement) {
    isGrabbingEmptyPiece.current = e.target.innerText == '' ? true : false
  }

  setGrabIdx(idx)
}
