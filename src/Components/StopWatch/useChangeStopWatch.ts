import { useEffect } from "react";


export function useChangeStopWatch({setStopWatch, victory}) {

    useEffect(()=>{
        if (victory) return
        const stateInterval = setInterval(() => {
            setStopWatch(prev=> prev + 1)
        }, 1000);

        return () => clearInterval(stateInterval);

    }, [setStopWatch, victory])

}
