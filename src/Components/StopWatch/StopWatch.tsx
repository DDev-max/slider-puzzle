import { usePuzzleCntxt } from "../../Context/usePuzzleCntxt";
import { useGetTime} from "../../Utils/useGetTime";
import { useChangeStopWatch } from "./useChangeStopWatch";
import {ResetBtn} from "../ResetBtn/ResetBtn"

export function StopWatch() {

    const context = usePuzzleCntxt()
    if(!context) return

    const {stopWatch, setStopWatch, victory }= context
    const {minutes, seconds, currentTime} = useGetTime(stopWatch)

    useChangeStopWatch({stopWatch, setStopWatch, victory, currentTime})


    //QUIZAS SEA MEJOR NO USAR <HEADER>
    return(
        <header className="header">
            <p>{minutes} m: {seconds} s</p>
            <ResetBtn/>
        </header>
    )
}


