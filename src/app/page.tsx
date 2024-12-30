"use client"
import { Puzzle } from "../Components/Puzzle/Puzzle"
import { StopWatch } from "../Components/StopWatch/StopWatch"
import { PuzzleProviderCntxt } from "../Context/PuzzleProviderCntxt"
import "../sass/styles.scss"


export default function QQQ() {

  //QUIZAS NO USAR CONTEXT...  

  return (
    <PuzzleProviderCntxt>
      <StopWatch/>
      <Puzzle/>
    </PuzzleProviderCntxt>
  )
};
