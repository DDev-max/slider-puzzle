import { useEffect } from "react"
import { LS_stopWatch } from "../../../data/consts"
import { StopWatchState } from "../../../data/types"


export function useStopWatchStorage({stopWatch, setStopWatch}: StopWatchState){

    useEffect(() => {
        const storage = Number(localStorage.getItem(LS_stopWatch) || 0)

        if (storage) setStopWatch(storage)

    }, [setStopWatch])

    useEffect(() => {
        if (stopWatch % 5 === 0) {
          localStorage.setItem("stopWatch", stopWatch.toString());          
        }
      }, [stopWatch]);

}