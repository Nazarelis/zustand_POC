import { useCounterStore } from "../store/store-counter";
import './style-components.css'

function ComponenteUno() {

  const { count, increment } = useCounterStore()
  //hook es lo que me permite consumir el store en este caso


  return (
    <div className="component">
      <div className="component-title">
        <h2>Primer componente: {count}</h2>
      </div>
      <div className="component-button">
        <button onClick={increment}>Incrementar</button>
      </div>
    
    </div>
  )

}

export default ComponenteUno;