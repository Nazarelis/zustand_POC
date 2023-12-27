import { useCounterStore } from "./store/store-counter"
import ComponenteUno from "./components/componente1"
import ComponenteDos from "./components/componente2"
import './App.css'

function App() {

  const globalStateCount = useCounterStore((state) => state.count)

  return (
    <>
    <ComponenteUno/>
    <h1>Contador: {globalStateCount}</h1>
    <ComponenteDos/>
    </>

  )
}

export default App
