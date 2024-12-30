import { useState } from "react";
import { usePuzzleCntxt } from "../../Context/usePuzzleCntxt"
import { useRandomArray } from "../../Utils/randomArray";
import { restartGame } from "./resetGame"
import { ResetBtnProps } from "../../data/types";



export function ResetBtn({setStopWatch}: ResetBtnProps) {

  const context = usePuzzleCntxt()
  const [refresh, setRefresh] = useState(0)
  const { setMovements,setVictory } = context

  const randomArray = useRandomArray(refresh)



  return (
    <button 
    className="resetBtn" 
    onClick={() => { 
      restartGame({randomArray,setMovements,setRefresh,setStopWatch,setVictory}) 
    }}

    >Restart game

    </button>
  )
}
