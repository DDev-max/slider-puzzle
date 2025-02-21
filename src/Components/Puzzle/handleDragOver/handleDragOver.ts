import type { HandleDragOverProps } from '../../../data/types'

export function handleDragOver({ canBeGrabbed, e, isEmptyPiece, isGrabbingEmptyPiece }: HandleDragOverProps) {
  if (isGrabbingEmptyPiece.current && canBeGrabbed) {
    e.preventDefault()
  }

  if (!isGrabbingEmptyPiece.current && isEmptyPiece && canBeGrabbed) {
    e.preventDefault()
  }
}
