import { LS_movements, LS_stopWatch } from "../../consts"
import {usePuzzleCntxt} from "../../Context/usePuzzleCntxt"
import { randomArray } from "../../Utils/randomArray"

export function useResetGame() {
    const context = usePuzzleCntxt()    
    if(!context) return
    
    const {setMovements, movements, setStopWatch} = context


    //NO SE PUEDE SIN ESTO, NI PUTA IDEA
    return ()=>{
        setMovements(randomArray().array)
        setStopWatch(0)
        localStorage.setItem(LS_movements, movements)
        localStorage.removeItem(LS_stopWatch)
    }

}
  