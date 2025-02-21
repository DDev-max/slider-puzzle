import type { DragEvent, MutableRefObject } from 'react'

interface HandleDragOverProps {
  e: DragEvent<HTMLDivElement>
  isGrabbingEmptyPiece: MutableRefObject<boolean>
  canBeGrabbed: boolean
  isEmptyPiece: boolean
}

export function handleDragOver({ canBeGrabbed, e, isEmptyPiece, isGrabbingEmptyPiece }: HandleDragOverProps) {
  if (isGrabbingEmptyPiece.current && canBeGrabbed) {
    e.preventDefault()
  }

  if (!isGrabbingEmptyPiece.current && isEmptyPiece && canBeGrabbed) {
    e.preventDefault()
  }
}
