import { useState } from 'react'
import { useRandomArray } from '../../Utils/useRandomArray/useRandomArray'
import { restartGame } from './resetGame/resetGame'
import { RestartSVG } from '../SVG/RestartSVG'
import type { ResetBtnProps } from '../../data/globalTypes'

export function ResetBtn({ setStopWatch, setMovements, setVictory }: ResetBtnProps) {
  const [refresh, setRefresh] = useState(0)

  const randomArray = useRandomArray({ refresh })

  return (
    <button
      className='resetBtn'
      onClick={() => {
        restartGame({ randomArray, setMovements, setRefresh, setStopWatch, setVictory })
      }}
    >
      <RestartSVG className='resetSVG' />
      Restart game
    </button>
  )
}
