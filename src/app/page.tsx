"use client"
import { useState } from "react"
import { Header } from "../Components/Header/Header"
import { Puzzle } from "../Components/Puzzle/Puzzle"
import "../sass/styles.scss"
import { useMovementsStorage } from "../Components/Puzzle/useMovementsStorage/useMovementsStorage"


export default function Page() {

    const [movements, setMovements] = useState<number[]>([])
    useMovementsStorage({movements,setMovements})


    const [victory, setVictory] = useState(false) 

  return (
    <>
      <Header  movements={movements} setMovements={setMovements} setVictory={setVictory} victory={victory}/>
      <Puzzle movements={movements} setMovements={setMovements}/>
    </>

  )
};
