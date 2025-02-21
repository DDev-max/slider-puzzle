import { useEffect } from 'react'
import type { StopWatchState, VictoryState } from '../../../data/globalTypes'

interface UseChangeStopWatchProps extends Pick<StopWatchState, 'setStopWatch'>, Pick<VictoryState, 'victory'> {}

export function useChangeStopWatch({ setStopWatch, victory }: UseChangeStopWatchProps) {
  useEffect(() => {
    if (victory) return
    const stateInterval = setInterval(() => {
      setStopWatch(prev => prev + 1)
    }, 1000)

    return () => clearInterval(stateInterval)
  }, [setStopWatch, victory])
}
