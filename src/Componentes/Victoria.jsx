import { useContext } from "react"
import { VictoriaCntxt } from "../Contexto/victoriaCntxt"
import { useEffect } from "react"
import { BtnReiniciar } from "./BtnReiniciar"
import { useMinsSec } from "../Utilidades/minutosSegundos"
import {usevictoria} from "../Hooks/useVictoria"

export default function Victoria() {
  const {movimientos, victoria, setVictoria, tiempo} = useContext(VictoriaCntxt)
  const {segundos, minutos }= useMinsSec()

  usevictoria({movimientos, setVictoria})



  return (
    victoria &&
    <div className="victoria">
      <h2>¡Felcidades! Lograste resolver el acertijo en {minutos}m {segundos}s </h2>
      <BtnReiniciar/>
  </div>
    
  )
}

