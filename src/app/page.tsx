"use client"
import { Header } from "../Components/Header/Header"
import { Puzzle } from "../Components/Puzzle/Puzzle"
import { PuzzleProviderCntxt } from "../Context/PuzzleProviderCntxt"
import "../sass/styles.scss"


export default function QQQ() {

  //QUIZAS NO USAR CONTEXT...  

  return (
    <PuzzleProviderCntxt>
      <Header/>
      <Puzzle/>
    </PuzzleProviderCntxt>
  )
};
