import { useEffect } from "react"
import { LS_stopWatch } from "../../data/consts"
import { UseStopWatchStorageProps } from "../../data/types"


export function useStopWatchStorage({stopWatch, setStopWatch}: UseStopWatchStorageProps){

    useEffect(() => {
        const storage = Number(localStorage.getItem(LS_stopWatch) || 0)

        if (storage) setStopWatch(storage)

    }, [setStopWatch])

    useEffect(() => {
        localStorage.setItem(LS_stopWatch, stopWatch.toString())
    }, [stopWatch])

}