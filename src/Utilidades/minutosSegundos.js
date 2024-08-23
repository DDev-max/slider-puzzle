import { useContext } from "react"
import { VictoriaCntxt } from "../Contexto/victoriaCntxt"


export function useMinsSec() {
    const {tiempo} = useContext(VictoriaCntxt)

    const tiempoAnterior = parseInt(localStorage.getItem("tiempo"))
    
    const tiempoActual = tiempoAnterior || tiempo

    
    const minutos= Math.floor(tiempoActual / 60)
    const segundos = tiempoActual >= 60 ? tiempoActual - (60 * minutos) : tiempoActual


    return {minutos, segundos}

}

