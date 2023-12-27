import { useCounterStore } from "../store/store-counter";

function ComponenteDos() {

  const { count, decrement } = useCounterStore()


  return (
    <>
    <h1>Counter {count}</h1>
    <button onClick={decrement}>Decrementar</button>
    </>
  )

}

export default ComponenteDos;