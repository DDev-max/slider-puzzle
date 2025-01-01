import { useEffect, useState } from "react";
import { defaultSize } from "../../data/consts";
import { UseRandomArrayProps } from "../../data/types";



export function useRandomArray({refresh, size=defaultSize}:UseRandomArrayProps) {

    const [shuffledArray, setShuffledArray] = useState<number[]>([])

    useEffect(()=>{
        const piecesQtty = size * size

        const array = Array.from({length: piecesQtty},( _ , idx) => idx +1)

        for (let i = array.length - 1; i > 0; i--) {
            const randomNumber = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomNumber]] = [array[randomNumber], array[i]];
        }
        

        setShuffledArray(array)


    }, [refresh, size])
    

    return shuffledArray

}