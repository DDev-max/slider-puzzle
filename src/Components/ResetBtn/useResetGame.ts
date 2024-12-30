export function restartGame({ setStopWatch, setRefresh, setMovements, randomArray, setVictory }) {

    setStopWatch(0)
    setRefresh(prev => prev + 1)
    setMovements(randomArray)
    setVictory(false)
    
}