import {useState } from "react"
import { useRef } from "react"
import { selectPiece } from "./selectPiece";
import {dependentAttributes} from "./dependentAttributes"
import { randomArray } from "../../Utils/randomArray"
import { usePuzzleCntxt } from "../../Context/usePuzzleCntxt"
import { exchangePieces } from "./exchangePieces";

export function Puzzle() {
    const context = usePuzzleCntxt()
    if (!context) return

    const { movements, setMovements } = context
    const [grabIdx, setGrabIdx] = useState<number | null>(null)
    const isGrabbingEmptyPiece = useRef(false)

    const allPiecesRef = useRef([])

    const { size } = randomArray()

    return (
        <main>
            <p>Agarrando : {grabIdx}</p>
            <section className="puzzle" style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
                {movements.map((elmnt, idx) => {
                    const emptyPiece = movements.length

                    return (
                        <div
                            key={elmnt}
                            tabIndex={0}
                            ref={(piece => allPiecesRef.current[idx] = piece)}

                            {...dependentAttributes({ idx, emptyPiece, elmnt, movements, isGrabbingEmptyPiece, size, grabIdx, setMovements, allPiecesRef })}

                            onDragStart={(e) => selectPiece({ idx, e, setGrabIdx, isGrabbingEmptyPiece })}
                            onDragEnd={() => {setGrabIdx(null)}}

                            onDrop={() => exchangePieces({ newPieceIdx: grabIdx, oldPieceIdx:idx, setMovements, movements })}

                        >
                            {elmnt == emptyPiece ? "" : elmnt}
                        </div>
                    )

                })}
            </section>
        </main>
    )
}
