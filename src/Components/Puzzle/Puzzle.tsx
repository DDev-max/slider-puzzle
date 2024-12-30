import { useState } from "react"
import { useRef } from "react"
import { selectPiece } from "./selectPiece";
import { dependentAttributes } from "./dependentAttributes"
import { usePuzzleCntxt } from "../../Context/usePuzzleCntxt"
import { exchangePieces } from "./exchangePieces";
import { defaultSize } from "../../consts";

export function Puzzle() {
    const context = usePuzzleCntxt()    

    const { movements, setMovements } = context
    const [grabIdx, setGrabIdx] = useState<number | null>(null)
    const isGrabbingEmptyPiece = useRef(false)

    const allPiecesRef = useRef([])

    return (
        <main>
            <section className="puzzle" style={{ gridTemplateColumns: `repeat(${defaultSize}, 1fr)` }}>
                {movements.map((elmnt, idx) => {
                    const emptyPiece = movements.length

                    return (
                        <div
                            key={elmnt}
                            tabIndex={0}
                            ref={(piece => {allPiecesRef.current[idx] = piece})}

                            {...dependentAttributes({ idx, emptyPiece, elmnt, movements, isGrabbingEmptyPiece, size: defaultSize, grabIdx, setMovements, allPiecesRef })}

                            onDragStart={(e) => selectPiece({ idx, e, setGrabIdx, isGrabbingEmptyPiece })}
                            onDragEnd={() => { setGrabIdx(null) }}

                            onDrop={() => exchangePieces({ newPieceIdx: grabIdx, oldPieceIdx: idx, setMovements, movements })}

                        >
                            {elmnt == emptyPiece ? "" : elmnt}
                        </div>
                    )

                })}
            </section>
        </main>
    )
}
