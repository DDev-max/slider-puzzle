import { LS_stopWatch } from "../consts"
import {usePuzzleCntxt} from "../Context/usePuzzleCntxt"

export function useGetTime(stopWatch) {
    const previousTime = parseInt(localStorage.getItem(LS_stopWatch) || "0")
    
    const currentTime = previousTime || stopWatch

    
    const minutes= Math.floor(currentTime / 60)
    const seconds = currentTime >= 60 ? currentTime - (60 * minutes) : currentTime


    return {minutes, seconds, currentTime}

}

