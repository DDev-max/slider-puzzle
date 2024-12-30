import { usePuzzleCntxt } from "../../Context/usePuzzleCntxt";
import { timeConversion} from "../../Utils/timeConversion";
import { useChangeStopWatch } from "./useChangeStopWatch";
import {ResetBtn} from "../ResetBtn/ResetBtn"
import { useState } from "react";
import { useStopWatchStorage } from "../../Context/useStopWatchStorage";
import { Victory } from "../Victory/Victory";

export function StopWatch() {

    const context = usePuzzleCntxt() || {}
    const { victory }= context

    const [stopWatch, setStopWatch] = useState(0)
    useStopWatchStorage({stopWatch, setStopWatch})
    useChangeStopWatch({setStopWatch, victory})

    const {minutes, seconds} = timeConversion(stopWatch)



    //QUIZAS SEA MEJOR NO USAR <HEADER>
    return(
        <header className="header">
            <p>{minutes} m: {seconds} s</p>
            <ResetBtn setStopWatch={setStopWatch}/>
            <Victory setStopWatch={setStopWatch} stopWatch={stopWatch}/>
        </header>
    )
}


