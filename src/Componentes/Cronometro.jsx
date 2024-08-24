import { useContext, useEffect, useState } from "react";
import { BtnReiniciar } from "../Componentes/BtnReiniciar";
import { VictoriaCntxt } from  "../Contexto/victoriaCntxt";
import { useMinsSec} from "../Utilidades/minutosSegundos";
import {useCronometro}  from "../Hooks/useCronometro"

export function Cronometro() {
    const {tiempo, setTiempo, victoria }= useContext(VictoriaCntxt)
    const {minutos, segundos} = useMinsSec()

    
    useCronometro({tiempo, setTiempo, victoria})


    return(
        <header className="header">
            <p>{minutos} m: {segundos} s</p>
            <BtnReiniciar/>
        </header>
    )
}


