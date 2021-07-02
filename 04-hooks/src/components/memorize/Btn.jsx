import React from "react";

/* React.memo () ->  hook para almacenar le definicion de algun elemento y así evitar la reenderización continua.
 */
const Btn = ({ value }) => {
  console.log("Se recargo componente BTN");
  return (
    <>
      <h3>Contador {value}</h3>
    </>
  );
};

export default React.memo(Btn);
