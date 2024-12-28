import { ResetBtn } from "../ResetBtn/ResetBtn"
import { useGetTime } from "../../Utils/useGetTime"
import {useHasWin} from "./useHasWin"
import { usePuzzleCntxt } from "../../Context/usePuzzleCntxt"

export function Victory () {
  const context = usePuzzleCntxt()
  if(!context) return
  
  const {movements, victory, setVictory,} = context
  const {seconds, minutes }= useGetTime()

  useHasWin({movements, setVictory})


  return (
    victory &&
    <div className="victory">
      <h2 className="victory__msg">Congratulations! You have solved the puzzle in {minutes}m and {seconds}s.</h2>
      <ResetBtn/>
    </div>
    
  )
}

