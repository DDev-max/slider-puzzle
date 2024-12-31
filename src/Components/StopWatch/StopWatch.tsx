import { usePuzzleCntxt } from "../../Context/usePuzzleCntxt";
import { timeConversion } from "../../Utils/timeConversion";
import { useChangeStopWatch } from "./useChangeStopWatch";
import { useStopWatchStorage } from "./useStopWatchStorage";
import { clockFont } from "../../data/fonts";
import { ClockSVG } from "../SVG/ClockSVG";
import { StopWatchState } from "../../data/types";



export function StopWatch({setStopWatch,stopWatch}:StopWatchState) {

    const context = usePuzzleCntxt()
    const { victory } = context

    useStopWatchStorage({ stopWatch, setStopWatch })
    useChangeStopWatch({ setStopWatch, victory })

    const { minutes, seconds } = timeConversion(stopWatch)



    return (
        <div role="timer" className={`stopWatch ${clockFont.className}`}>
            <ClockSVG className="clockSvg" />
            <p className="timeCont">
                <span>{minutes} m:</span>
                <span>{seconds} s</span>
            </p>
        </div>

    )
}


