const Bienvenida = () =>{
    const nombre = prompt("Ingresa tu nombre");
    return(
        <div>
            <h1>HOLA DESDE ESTRUCTURA DE CONTENIDO</h1>
            <h2>Bienvenido: {nombre}</h2>
            <hr />
        </div>
    )
};

const Contador = () =>{
    return(
        <div>
            <h1>Contador: 0</h1>
            <hr />
            <button>AUMENTAR</button>
            <button>DISMINUIR</button>
        </div>
    )
};
