import cheess from "../assets/cheess.mp3"

export function intercambiarElmnts({indice, setMovimientos, movimientos, indiceAgarrado}) { //onDrop
    const sonidoSoltar = new Audio(cheess)
    sonidoSoltar.play()

    const copiaMovimientos = [...movimientos]
    const elmntOriginal = copiaMovimientos[indice]
    copiaMovimientos[indice] = copiaMovimientos[indiceAgarrado]
    copiaMovimientos[indiceAgarrado] = elmntOriginal


    

    setMovimientos(copiaMovimientos)
}