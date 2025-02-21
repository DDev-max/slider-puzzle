import { ResetBtn } from '../ResetBtn/ResetBtn'
import { timeConversion } from '../../Utils/timeConversion/timeConversion'
import { useHasWin } from './useHasWin/useHasWin'
import type { MovementsState, StopWatchState, VictoryState } from '../../data/globalTypes'

interface VictoryProps extends VictoryState, StopWatchState, MovementsState {}

export function Victory({ stopWatch, setStopWatch, setVictory, victory, movements, setMovements }: VictoryProps) {
  const { seconds, minutes } = timeConversion(stopWatch)

  useHasWin({ movements, setVictory })

  return (
    victory && (
      <div className='bgVictory'>
        <div className='victory'>
          <p role='alert' aria-live='assertive' aria-atomic='true' className='victory__msg'>
            Congratulations! You have solved the puzzle in {minutes}m and {seconds}s.
          </p>
          <ResetBtn setVictory={setVictory} setMovements={setMovements} setStopWatch={setStopWatch} />
        </div>
      </div>
    )
  )
}
