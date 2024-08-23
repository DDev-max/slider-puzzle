import { useContext } from "react"
import { VictoriaCntxt } from "../Contexto/victoriaCntxt"
import { useReiniciar } from "../Hooks/useReiniciar"

export function BtnReiniciar() {
  const reiniciar = useReiniciar()

  return (
    <button className="reinicarBtn" onClick={reiniciar}>Reiniciar Partida</button>
  )
}
