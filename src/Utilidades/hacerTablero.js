export function hacerTablero() {
    const dimensiones = 4

    const cantidadCampos = dimensiones * dimensiones
    const tablero = Array.from({length: cantidadCampos},(valor, indice) => indice +1)

    for (let i = tablero.length - 1; i > 0; i--) {
        const aleatorio = Math.floor(Math.random() * (i + 1));
        [tablero[i], tablero[aleatorio]] = [tablero[aleatorio], tablero[i]];
    }


    return {dimensiones, tablero}

}