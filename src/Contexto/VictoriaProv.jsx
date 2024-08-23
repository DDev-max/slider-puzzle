import { useState } from "react"
import {VictoriaCntxt} from "./victoriaCntxt"
import { hacerTablero } from "../Utilidades/hacerTablero"
import {verStorage} from "../Utilidades/verStorage"


export function VictoriaProv({children}) { 
    const [tiempo, setTiempo] = useState(0)

    const tablero = verStorage() || hacerTablero().tablero

    const [movimientos, setMovimientos]= useState(tablero)
    localStorage.setItem('movimientos', movimientos)
    const [victoria, setVictoria] = useState(false)


    

    return(
        <VictoriaCntxt.Provider value={{ movimientos, setMovimientos, victoria, setVictoria, hacerTablero, tiempo, setTiempo}}> 
            {children}
        </VictoriaCntxt.Provider>
    )
}