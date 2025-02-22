import { useEffect, useState } from 'react'
import { defaultSize } from '../../data/consts'

interface UseRandomArrayProps {
  refresh?: number
  size?: number
}

export function useRandomArray({ refresh, size = defaultSize }: UseRandomArrayProps) {
  const [shuffledArray, setShuffledArray] = useState<number[]>([])

  useEffect(() => {
    const piecesQtty = size * size

    const sortedArray = Array.from({ length: piecesQtty }, (_, idx) => idx + 1)
    const randomArray = [...sortedArray]

    while (randomArray.toString() === sortedArray.toString()) {
      for (let i = randomArray.length - 1; i > 0; i--) {
        const randomNumber = Math.floor(Math.random() * (i + 1))
        ;[randomArray[i], randomArray[randomNumber]] = [randomArray[randomNumber], randomArray[i]]
      }
    }

    setShuffledArray(randomArray)
  }, [refresh, size])

  return shuffledArray
}
