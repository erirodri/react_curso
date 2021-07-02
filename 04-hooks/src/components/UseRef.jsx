import React from "react";
import { useRef } from "react";

const UseRef = () => {
  /* UseRef -> Es utilizado para manejo de referencias dentro de react
   * En JS natural se usa -> document.getElementBy[Class|Id]("");
   */
  const ref = useRef(null);

  const handleClick = () => {
    console.log(ref.current.value);
  };

  return (
    <>
      <h1>UseRef</h1>
      <hr />
      <textarea ref={ref} placeholder="Inserta tus comentarios..."></textarea>
      <br />
      <button onClick={handleClick}>Click Me..</button>
    </>
  );
};

export default UseRef;
