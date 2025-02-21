import { useEffect, useRef } from 'react'
import { useRandomArray } from '../../../Utils/useRandomArray/useRandomArray'
import { LS_movements } from '../../../data/consts'
import type { MovementsState } from '../../../data/globalTypes'

export function useMovementsStorage({ setMovements, movements }: MovementsState) {
  const initialPuzzle = useRef([])
  const randomArray = useRandomArray({})

  useEffect(() => {
    const storage = localStorage.getItem(LS_movements)?.split(',').map(Number)

    initialPuzzle.current = storage && storage.length ? storage : randomArray

    setMovements(initialPuzzle.current)
  }, [randomArray, setMovements])

  useEffect(() => {
    if (!movements.length) return

    localStorage.setItem(LS_movements, movements.toString())
  }, [movements])
}
