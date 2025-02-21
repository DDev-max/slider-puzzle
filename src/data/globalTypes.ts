import type { Dispatch, SetStateAction } from 'react'

export interface VictoryState {
  victory: boolean
  setVictory: Dispatch<SetStateAction<boolean>>
}

export interface StopWatchState {
  stopWatch: number
  setStopWatch: Dispatch<SetStateAction<number>>
}

export interface MovementsState {
  movements: number[]
  setMovements: Dispatch<SetStateAction<number[]>>
}

export interface ResetBtnProps extends Pick<StopWatchState, 'setStopWatch'>, Pick<VictoryState, 'setVictory'>, Pick<MovementsState, 'setMovements'> {}
