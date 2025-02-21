import type { Dispatch, SetStateAction } from 'react'
import type { ResetBtnProps } from '../../../data/globalTypes'

interface RestartGameProps extends ResetBtnProps {
  setRefresh: Dispatch<SetStateAction<number>>
  randomArray: number[]
}

export function restartGame({ setStopWatch, setRefresh, setMovements, randomArray, setVictory }: RestartGameProps) {
  setStopWatch(0)
  setRefresh(prev => prev + 1)
  setMovements(randomArray)
  setVictory(false)
}
