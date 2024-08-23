import { useState } from "react"

export function desplazamiento({indice, piezaVacia, elmnt, movimientos, agarrandoPiezaVacia, dimensiones}) {
        
    const esPiezaVacia = movimientos[indice] == piezaVacia

    const posicionVacia = movimientos.findIndex(elmnt=> elmnt == piezaVacia)

    const bordeDerecho = (posicionVacia + 1) % dimensiones == 0
    const bordeIzquierdo = posicionVacia % dimensiones == 0
    

    const anteriorElmnt = movimientos[indice - 1]
    const siguienteElmnt = movimientos[indice + 1]
    const arribaElmnt = movimientos[indice - dimensiones]
    const abajoElmnt= movimientos[indice + dimensiones]

    const piezaVaciaCerca = siguienteElmnt == piezaVacia || anteriorElmnt == piezaVacia || esPiezaVacia || arribaElmnt == piezaVacia || abajoElmnt == piezaVacia


    const indexSigVacia = posicionVacia + 1
    const indexAntVacia = posicionVacia - 1

    const [cuandoSeSuelte, setCuandoSeSuelte] = useState()

    

    function DIVISION() {

           
        if (bordeDerecho && movimientos[indexSigVacia] == elmnt) {

            return "false"
        }

        if (bordeIzquierdo && movimientos[indexAntVacia] == elmnt) {
            return "false"
        }


    }


    const esAgarrable = !DIVISION() && piezaVaciaCerca
 
    function permitirDrop(event) {
        if (agarrandoPiezaVacia.current && esAgarrable) {
            setCuandoSeSuelte(event.preventDefault())
            return cuandoSeSuelte
        } else if(!agarrandoPiezaVacia.current && esPiezaVacia){ 
            setCuandoSeSuelte(event.preventDefault())
            return cuandoSeSuelte
        }
    }



    return {
        draggable: esAgarrable,
        onDragOver: permitirDrop,
        className: `piezas ${esAgarrable? "movible": ""} ${elmnt == piezaVacia ? "piezaVacia" : `pieza${elmnt}`}`
        
    }
}

