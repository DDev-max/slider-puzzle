import { useState } from "react"
import {PuzzleCntxt} from "./PuzzleCntxt"
import {LS_movements} from "../consts"
import { randomArray } from "../Utils/randomArray"
import { getPreviousGame } from "../Utils/getPreviousGame"

export function PuzzleProviderCntxt({children}) { 
    const [stopWatch, setStopWatch] = useState(0)

    const fullArray = getPreviousGame() || randomArray().array

    const [movements, setMovements]= useState(fullArray)
    localStorage.setItem(LS_movements, movements.toString())
    const [victory, setVictory] = useState(false)

    
    /*
        POR QUE RANDOW ARRAY ES UN CONTEXT?
    */
    return(
        <PuzzleCntxt.Provider value={{ movements, setMovements, victory, setVictory, stopWatch, setStopWatch}}> 
            {children}
        </PuzzleCntxt.Provider>
    )
}