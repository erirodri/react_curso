import React, { useState, useCallback } from "react";
import Btn from "./Btn";
/* Se utiliza UseCallback para memorizar funciones y solo ejecutarla cuando alguna de sus dependencias cambian*/
const UseCallback = () => {
  const [counter, setCounter] = useState(5);
  const [nameTitulo, setNameTitulo] = useState("Erick");

  /* useCallback -> Este ejemplo mezcla memo (definido en el componente que consume el prop que se modifica en este useCallback)
        y useCallback, para controlar la recarga de compononte importado -> Solo se recarga si es que la variable en cuestion
        tiene alguna modificación.
  */
  const add = useCallback(() => {
    setCounter((actual) => actual + 1);
  }, [setCounter]);

  /* Controla la ejecución de codigo de acuerdo a cambios en determinados elementos
   *     En este ejemplo, no se ejecuta lo que esta dentro de changeName hasta que la variable [nameTitulo] tenga algun cambio
   */
  const changeName = useCallback(
    (e) => {
      setNameTitulo(e.target.value);
      console.log("Se recargo componente UseCallback");
    },
    [nameTitulo]
  );

  return (
    <div>
      <h1>Use Callback - {nameTitulo}</h1>
      <hr />
      <Btn value={counter} />
      <button onClick={add}>Aumentar</button>
      <span>
        Cambiar Nombre:{" "}
        <input value={nameTitulo} onChange={changeName} type="text"></input>
      </span>
    </div>
  );
};

export default UseCallback;
