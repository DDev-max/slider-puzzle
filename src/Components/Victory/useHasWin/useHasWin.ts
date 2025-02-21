import { useEffect } from 'react'
import type { UseHasWinProps } from '../../../data/types'

export function useHasWin({ movements, setVictory }: UseHasWinProps) {
  useEffect(() => {
    if (!movements.length) return

    const solution = [...movements].sort((a, b) => a - b)

    const isVictory = solution.every((value, index) => value === movements[index])

    if (isVictory) setVictory(true)
  }, [movements, setVictory])
}
