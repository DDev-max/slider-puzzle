import { useContext } from "react"
import { VictoriaCntxt } from "../Contexto/victoriaCntxt"

export function useReiniciar() {
    const {hacerTablero, setMovimientos, movimientos, setTiempo} = useContext(VictoriaCntxt)


    return ()=>{
        setMovimientos(hacerTablero().tablero)
        setTiempo(0)
        localStorage.setItem('movimientos', movimientos)
        localStorage.removeItem('tiempo')

    }

}
  