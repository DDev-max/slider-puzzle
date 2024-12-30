import { useEffect } from "react"
import { LS_stopWatch } from "../consts"

export function useStopWatchStorage({stopWatch, setStopWatch}){

    useEffect(() => {
        const storage = Number(localStorage.getItem(LS_stopWatch) || 0)

        if (storage) setStopWatch(storage)

    }, [])

    useEffect(() => {
        localStorage.setItem(LS_stopWatch, stopWatch.toString())
    }, [stopWatch])

}