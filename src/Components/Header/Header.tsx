import { useState } from 'react'
import { ResetBtn } from '../ResetBtn/ResetBtn'
import { StopWatch } from '../StopWatch/StopWatch'
import { Victory } from '../Victory/Victory'
import type { MovementsState, VictoryState } from '../../data/globalTypes'

interface HeaderProps extends MovementsState, VictoryState {}

export function Header({ movements, setMovements, setVictory, victory }: HeaderProps) {
  const [stopWatch, setStopWatch] = useState(0)

  return (
    <>
      <header className='header'>
        <StopWatch victory={victory} setStopWatch={setStopWatch} stopWatch={stopWatch} />
        <ResetBtn setMovements={setMovements} setVictory={setVictory} setStopWatch={setStopWatch} />
      </header>
      <Victory
        movements={movements}
        setMovements={setMovements}
        setVictory={setVictory}
        victory={victory}
        setStopWatch={setStopWatch}
        stopWatch={stopWatch}
      />
    </>
  )
}
