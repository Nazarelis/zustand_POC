import { useCounterStore } from "../store/store-counter";

function ComponenteUno() {

  const { count, increment } = useCounterStore()
  //hook es lo que me permite consumir el store en este caso


  return (
    <>
    <h1>Counter {count}</h1>
    <button onClick={increment}>Incrementar</button>
    </>
  )

}

export default ComponenteUno;