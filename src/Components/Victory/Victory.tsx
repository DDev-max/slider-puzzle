import { ResetBtn } from "../ResetBtn/ResetBtn"
import { timeConversion } from "../../Utils/timeConversion"
import {useHasWin} from "./useHasWin"
import { usePuzzleCntxt } from "../../Context/usePuzzleCntxt"
import { StopWatchState } from "../../data/types"

export function Victory ({stopWatch, setStopWatch}: StopWatchState) {
  const context = usePuzzleCntxt()
  
  const {movements, victory, setVictory} = context
  const {seconds, minutes } = timeConversion(stopWatch)

  useHasWin({movements, setVictory})


  return (
    victory &&
    <div className="victory">
      <h2 className="victory__msg">Congratulations! You have solved the puzzle in {minutes}m and {seconds}s.</h2>
      <ResetBtn setStopWatch={setStopWatch}/>
    </div>
    
  )
}

