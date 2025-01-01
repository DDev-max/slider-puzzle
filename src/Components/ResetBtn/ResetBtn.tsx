import { useState } from "react";
import { useRandomArray } from "../../Utils/useRandomArray/useRandomArray";
import { restartGame } from "./resetGame/resetGame"
import { ResetBtnProps } from "../../data/types";
import { RestartSVG } from "../SVG/RestartSVG";



export function ResetBtn({ setStopWatch,setMovements,setVictory }: ResetBtnProps) {

  const [refresh, setRefresh] = useState(0)

  const randomArray = useRandomArray({refresh})



  return (
    <button
      className="resetBtn"
      onClick={() => {
        restartGame({ randomArray, setMovements, setRefresh, setStopWatch, setVictory })
      }}
    >
      <RestartSVG className="resetSVG"/>
      Restart game

    </button >
  )
}
