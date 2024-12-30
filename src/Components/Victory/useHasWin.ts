import { useEffect } from "react"

export function useHasWin({ movements, setVictory }) {

  useEffect(() => {
    if (!movements.length) return

    const solution = [...movements].sort((a, b) => a - b);

    const isVictory = solution.every((value, index) => value === movements[index]);

    if (isVictory) setVictory(true)
  }, [movements, setVictory]);


}
