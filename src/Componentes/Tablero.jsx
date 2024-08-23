import { useContext, useState } from "react"
import { VictoriaCntxt } from "../Contexto/victoriaCntxt"
import { useRef } from "react"
import {quitarClase} from "../LogicaPiezas/quitarClase"
import {selecccionarElmnt} from "../LogicaPiezas/seleccionarElmnt"
import {intercambiarElmnts} from "../LogicaPiezas/intercambiarElmnts"
import {desplazamiento} from "../LogicaPiezas/desplazamiento"

export function Tablero() {
    const  {movimientos, setMovimientos, hacerTablero} = useContext(VictoriaCntxt)
    const [indiceAgarrado, setIndiceAgarrado] = useState()
    let agarrandoPiezaVacia = useRef(false)

    const {dimensiones} = hacerTablero()


    return(
        <main>
            <section className="tablero" style={{ gridTemplateColumns: `repeat(${dimensiones}, 1fr)`}}>
                {movimientos.map((elmnt, indice)=>{
                    const piezaVacia= movimientos.length                    
                    
                    return(
                        <div 
                        key={elmnt}


                        {...desplazamiento({indice, piezaVacia, elmnt, movimientos, agarrandoPiezaVacia, dimensiones})}

                        onDragStart={(event) => selecccionarElmnt({indice, event, setIndiceAgarrado, agarrandoPiezaVacia})}
                
                        onDrop={(evento) => intercambiarElmnts({indice, setMovimientos, movimientos, evento, indiceAgarrado})}


                        onDragEnd={quitarClase}

                        >
                            {elmnt == piezaVacia? "": elmnt}
                        </div>
                    )
                    
                })}
            </section>
        </main>
    )
}
