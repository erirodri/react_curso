const Contador = () =>{
    const [contador,setContador]= React.useState(0);
    const aumentar= () => setContador(contador+1);
    const disminuir= () => {
        (contador==0)?contador:setContador(contador-1)
    };

    return(
        <div className="text-center">
            <h1 className={(contador==0)?"contador warning":"contador"}>Contador: {contador}</h1>
            <hr />
            <button className="btn btn-outline-danger" onClick={disminuir}>DISMINUIR</button>
            <button className="btn btn-outline-primary" onClick={aumentar}>AUMENTAR</button>
        </div>
    )
    
};


