import { useState } from 'react'
import { useRef } from 'react'
import { selectPiece } from './selectPiece/selectPiece'
import { dependentAttributes } from './dependentAttributes'
import { swapPieces } from './swapPieces/swapPieces'
import { defaultSize } from '../../data/consts'
import { puzzleFont } from '../../data/fonts'
import type { MovementsState } from '../../data/globalTypes'

interface PuzzleProps extends MovementsState {
  size?: number
}

export function Puzzle({ movements, setMovements, size = defaultSize }: PuzzleProps) {
  const [grabIdx, setGrabIdx] = useState<number | null>(null)
  const isGrabbingEmptyPiece = useRef(false)

  const allPiecesRef = useRef<HTMLDivElement[]>([])

  return (
    <main>
      <div className={`puzzle ${puzzleFont.className}`} style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
        {movements.map((elmnt, idx) => {
          const emptyPiece = movements.length

          return (
            <div
              role='application'
              aria-label={
                emptyPiece == elmnt ? 'Empty space, you can put a nearby piece here.' : `Piece ${elmnt},  position ${idx + 1} of ${emptyPiece}`
              }
              key={elmnt}
              tabIndex={0}
              ref={piece => {
                allPiecesRef.current[idx] = piece
              }}
              {...dependentAttributes({ idx, emptyPiece, elmnt, movements, isGrabbingEmptyPiece, grabIdx, setMovements, allPiecesRef, size })}
              onDragStart={e => selectPiece({ idx, e, setGrabIdx, isGrabbingEmptyPiece })}
              onDragEnd={() => {
                setGrabIdx(null)
              }}
              onDrop={() => swapPieces({ newPieceIdx: grabIdx, oldPieceIdx: idx, setMovements, movements })}
            >
              {elmnt == emptyPiece ? '' : elmnt}
            </div>
          )
        })}
      </div>
    </main>
  )
}
