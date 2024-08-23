import {VictoriaProv} from "./Contexto/VictoriaProv"
import Victoria from "./Componentes/Victoria"
import {Cronometro} from "./Componentes/Cronometro"
import {Tablero} from "./Componentes/Tablero"
import "./sass/dist/styles.css"

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
