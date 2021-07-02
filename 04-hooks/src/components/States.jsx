import { useState, useEffect } from "react";

const States = () => {
  /* useState es un hook para ir controlando estados dentro de la function
   *   Cada que se llama el setState, la pagina se reenderiza totalmente
   */
  const [state, setState] = useState(0);
  const [numero, setNumero] = useState(0);
  const evento = (e) => {
    console.log("moviendo");
  };
  console.log(
    "Contador fuera del useEffect(renderizo pagina completa): " + state
  );

  /* useEffect -> Nos permite controlar los elementos que queremos sean renderizados 1 sola vez o de acuerdo a ciertos eventos o cambios
   *   Para indicar que eventos o cambios de variables lanzan este hook, se definen dentro del [] que esta despues del cierre },
   */
  useEffect(() => {
    console.log("Contador dentro del useEffect: " + state);
  }, []);

  /* useEffect con cleanUp -> Se usa cleanUp para tener un control de cuando usar y cuando no usar lo que se define en el useEffect
   *    Como tal, el cleanup se mete dentro del return
   */
  useEffect(() => {
    if (numero == 123) {
      window.addEventListener("mousemove", evento);
    }
    return () => {
      window.removeEventListener("mousemove", evento);
    };
  }, [numero]);

  const handleClick = () => {
    setState(state + 1);
  };
  return (
    <div className="container text-center">
      <h1>Usando States</h1>
      <hr />
      <h1>Contador: {state}</h1>
      <br />
      <button onClick={handleClick}>Aumentar</button>
      <span>Ingrese un numero: </span>
      <input value={numero} onChange={(e) => setNumero(e.target.value)}></input>
    </div>
  );
};

export default States;
