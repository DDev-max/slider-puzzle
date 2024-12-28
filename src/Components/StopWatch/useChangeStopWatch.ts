import { useEffect } from "react";
import { LS_stopWatch } from "../../consts";


export function useChangeStopWatch({stopWatch, setStopWatch, victory, currentTime}) {
    // SI NO SE USA USEEFFECT EL TIEMPO SE VA en x100000
    useEffect(() => {

        if (victory) return

        setStopWatch(currentTime)

        const intervalId = setInterval(() => {
            setStopWatch((tiempoActual) => {
                const newTime = tiempoActual + 1

                // HACERLO MENOS SEGUIDO POR QUE CONSUME MUCHO RECURSO
                localStorage.setItem(LS_stopWatch, newTime)

                return newTime
            })
        }, 1000);

        return () => clearInterval(intervalId)
        
    }, [stopWatch, victory])

}
