import { useEffect, useRef } from "react"
import { LS_movements } from "../data/consts"
import { useRandomArray } from "../Utils/randomArray"
import { UseMovementsStorageProps } from "../data/types"


export function useMovementsStorage({setMovements, movements}: UseMovementsStorageProps) {

    const initialPuzzle =  useRef([])
    const randomArray = useRandomArray()

    useEffect(() => {
        const storage = localStorage.getItem(LS_movements)?.split(",").map(Number)


        initialPuzzle.current = storage && storage.length
            ? storage
            : randomArray

        setMovements(initialPuzzle.current)
    }, [randomArray, setMovements])


    useEffect(() => {
        if (!movements.length) return

        localStorage.setItem(LS_movements, movements.toString())

    }, [movements])

}