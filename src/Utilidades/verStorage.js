import { hacerTablero } from "./hacerTablero"

export function verStorage() {
    const {dimensiones} = hacerTablero()
    const jugadasPrevias = localStorage.getItem('movimientos')
    const conversionStorage= jugadasPrevias?.split(",").map(Number)

    const mismasDimensiones = conversionStorage?.length / dimensiones == dimensiones

    if (mismasDimensiones) {
        return conversionStorage
    } else{
        localStorage.removeItem("movimientos")
        return null
    }        
    
} 