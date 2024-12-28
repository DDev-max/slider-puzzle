import { LS_movements } from "../consts"
import { randomArray } from "./randomArray"

export function getPreviousGame() {
    const {size} = randomArray()

    const previousGame = localStorage.getItem(LS_movements)
    const storageConversion= previousGame?.split(",").map(Number)

    const isSameSize = (storageConversion?.length || 0) / (size) === size

    if (isSameSize) {
        return storageConversion
    } else{
        localStorage.removeItem(LS_movements)
        return null
    }        
    
} 