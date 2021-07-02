export const operaciones = (numeros, setNumero) => {
  // Destructuramos numeros para no estar escribiendo numeros.***
  const { numero1, numero2 } = numeros;

  const handleChange = (e) => {
    setNumero({
      // Hace una copial de la variable numero
      ...numeros,
      // identifica el elemento (e.target.name) que ejecuto onChange para asigar el nuevo valor(e.target.value)
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const sumar = () => numero1 + numero2;
  const restar = () => numero1 - numero2;
  const multiplicar = () => numero1 * numero2;
  const dividir = () => numero1 / numero2;

  return {
    handleChange,
    sumar,
    restar,
    multiplicar,
    dividir,
    numero1,
    numero2,
  };
};
