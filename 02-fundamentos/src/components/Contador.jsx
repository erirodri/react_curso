import React, { useState } from 'react'

// export const Contador = (props) => {
export const Contador = ({value,factorAumento}) => {

    //const [contador,setContador] = useState(props.value);
    const [contador,setContador] = useState(value); // Utliziando destructuración para entrar mas rapido a la variable deseada

    const aumentar = () =>{
        setContador((actual) => actual+factorAumento);
    }
    
    const disminuir = () =>{
        setContador(contador-factorAumento);
    }

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <hr />
            <button onClick={disminuir}>DISMINUIR</button>
            <button onClick={aumentar}>AUMENTAR</button>
        </div>
    )
}
