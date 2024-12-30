import { useEffect, useRef } from "react"
import { LS_movements } from "../consts"
import { useRandomArray } from "../Utils/randomArray"

export function useMovementsStorage({setMovements, movements}) {

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