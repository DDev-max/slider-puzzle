import {VictoriaProv} from "./Contexto/VictoriaProv"
import Victoria from "./Componentes/Victoria"
import {Cronometro} from "./Componentes/Cronometro"
import {Tablero} from "./Componentes/Tablero"
import "./sass/styles.scss"

function App() {

  return (
    <VictoriaProv>
      <Victoria/>
      <Cronometro/>
      <Tablero/>
    </VictoriaProv>
  )
}

export default App
