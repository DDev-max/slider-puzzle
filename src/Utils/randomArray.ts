import { useEffect, useState } from "react";
import { defaultSize } from "../consts";

export function useRandomArray(refresh?: number) {

    const [shuffledArray, setShuffledArray] = useState([])

    useEffect(()=>{
        const piecesQtty = defaultSize * defaultSize

        const array = Array.from({length: piecesQtty},( _ , idx) => idx +1)

        for (let i = array.length - 1; i > 0; i--) {
            const randomNumber = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomNumber]] = [array[randomNumber], array[i]];
        }

        setShuffledArray(array)

        console.log("nuevo array generado", array);

    }, [refresh])
    

    return shuffledArray

}