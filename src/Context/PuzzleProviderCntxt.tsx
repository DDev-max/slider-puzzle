import { useState } from "react"
import { PuzzleCntxt } from "./PuzzleCntxt"
import { useMovementsStorage } from "./useMovementsStorage"

export function PuzzleProviderCntxt({ children }) {

    const [movements, setMovements] = useState([])
    useMovementsStorage({movements,setMovements})


    const [victory, setVictory] = useState(false)


    return (
        <PuzzleCntxt.Provider value={{ movements, setMovements, victory, setVictory}}>
            {children}
        </PuzzleCntxt.Provider>
    )
}