import { timeConversion } from '../../Utils/timeConversion/timeConversion'
import { useChangeStopWatch } from './useChangeStopWatch/useChangeStopWatch'
import { useStopWatchStorage } from './useStopWatchStorage/useStopWatchStorage'
import { clockFont } from '../../data/fonts'
import { ClockSVG } from '../SVG/ClockSVG'
import type { StopWatchProps } from '../../data/types'

export function StopWatch({ setStopWatch, stopWatch, victory }: StopWatchProps) {
  useStopWatchStorage({ stopWatch, setStopWatch })
  useChangeStopWatch({ setStopWatch, victory })

  const { minutes, seconds } = timeConversion(stopWatch)

  return (
    <div role='timer' className={`stopWatch ${clockFont.className}`}>
      <ClockSVG className='clockSvg' />
      <p className='timeCont'>
        <span>{minutes} m:</span>
        <span>{seconds} s</span>
      </p>
    </div>
  )
}
