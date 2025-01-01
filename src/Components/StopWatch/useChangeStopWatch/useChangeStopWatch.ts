import { useEffect } from "react";
import { UseChangeStopWatchProps } from "../../../data/types";


export function useChangeStopWatch({setStopWatch, victory}:UseChangeStopWatchProps) {

    useEffect(()=>{
        if (victory) return
        const stateInterval = setInterval(() => {
            setStopWatch(prev=> prev + 1)
        }, 1000);

        return () => clearInterval(stateInterval);

    }, [setStopWatch, victory])

}
