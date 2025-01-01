import { RestartGameProps } from "../../../data/types"

export function restartGame({ setStopWatch, setRefresh, setMovements, randomArray, setVictory }: RestartGameProps) {

    setStopWatch(0)
    setRefresh(prev => prev + 1)
    setMovements(randomArray)
    setVictory(false)
    
}