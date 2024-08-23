import { useEffect } from "react";


export function useCronometro({tiempo, setTiempo, victoria}) {
    useEffect(()=>{
        if (victoria) return

        const tiempoAnterior = parseInt(localStorage.getItem("tiempo"))        

        tiempoAnterior? setTiempo(tiempoAnterior) : true

        const intervaloID= setInterval(() => {
            setTiempo((tiempoActual)=>{
                const nuevoTiempo =  tiempoActual + 1
                localStorage.setItem("tiempo", nuevoTiempo)

                return nuevoTiempo
            }) // no sirve con ++
        }, 1000);

        return () => clearInterval(intervaloID)
    }, [tiempo, victoria])

}
