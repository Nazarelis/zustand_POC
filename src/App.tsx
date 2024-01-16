import { useCounterStore } from "./store/store-counter"
import ComponenteUno from "./components/componente1"
import ComponenteDos from "./components/componente2"
import './App.css'

function App() {

  const globalStateCount = useCounterStore((state) => state.count)

  return (
    <>
    <div className="tittle-app">
      <h1 >Zustand App</h1>
    </div>
    
    <div className="container-components">
      <div>
      <ComponenteUno/>
      </div>
      <div>
      <h2>Estado actual de la store: {globalStateCount}</h2>

      </div>
      <div>
      <ComponenteDos/>
      </div>
    </div>

    </>

  )
}

export default App
