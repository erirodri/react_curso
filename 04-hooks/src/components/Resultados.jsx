import React from "react";
import PropTypes from "prop-types";

const Resultados = ({ operacion, resultado }) => {
  return (
    <>
      <span className="mx-2">
        {operacion}: {resultado}
      </span>
      <br />
    </>
  );
};

Resultados.propTypes = {
  operacion: PropTypes.string,
  resultado: PropTypes.number,
};

export default Resultados;
