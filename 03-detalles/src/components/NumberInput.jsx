import React, { useState } from "react";
import Resultados from "./Resultados";
import { operaciones } from "../helpers/operaciones";

const NumberInput = () => {
  const [numeros, setNumero] = useState({
    numero1: 0,
    numero2: 0,
  });

  const {
    handleChange,
    sumar,
    restar,
    multiplicar,
    dividir,
    numero1,
    numero2,
  } = operaciones(numeros, setNumero);

  return (
    <>
      <label className="mx-5">
        Numero 1:{" "}
        <input
          value={numero1}
          name="numero1"
          onChange={handleChange}
          type="number"
        />
      </label>
      <label className="mx-5">
        Numero 2:{" "}
        <input
          value={numero2}
          name="numero2"
          onChange={handleChange}
          type="number"
        />
      </label>
      <br />
      <br />
      <h3> Resultado de operacion:</h3>
      <Resultados operacion="Suma" resultado={sumar()} />
      <Resultados operacion="Resta" resultado={restar()} />
      <Resultados operacion="Multiplicacion" resultado={multiplicar()} />
      <Resultados operacion="Division" resultado={dividir()} />
    </>
  );
};

export default NumberInput;
