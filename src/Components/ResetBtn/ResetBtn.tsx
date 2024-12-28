import { useResetGame } from "./useResetGame"

export function ResetBtn() {
  const resetGame = useResetGame()

  return (
    <button className="resetBtn" onClick={resetGame}>Restart game</button>
  )
}
