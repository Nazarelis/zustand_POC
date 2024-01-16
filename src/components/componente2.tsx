import { useCounterStore } from "../store/store-counter";
import './style-components.css'

function ComponenteDos() {

  const { count, decrement } = useCounterStore()


  return (
    <div className="component">
      <div className="component-title">
        <h2>Segundo componente: {count}</h2>
      </div>
      <div className="component-button">
        <button onClick={decrement}>Decrementar</button>
      </div>
    
    </div>
  )

}

export default ComponenteDos;