import {Puzzle} from "./Components/Puzzle/Puzzle"
import {Victory} from "./Components/Victory/Victory"
import {PuzzleProviderCntxt} from "./Context/PuzzleProviderCntxt"
import { StopWatch } from "./Components/StopWatch/StopWatch"
import "./sass/styles.scss"

function App() {

  return (
    <PuzzleProviderCntxt>
      <Victory/>
      <StopWatch/>
      <Puzzle/>
    </PuzzleProviderCntxt>
  )
}

export default App
