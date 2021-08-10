import React, {useState} from 'react';

const ItemCount = ( { stockInit, initial } ) => {
    
    const [contador, setContador] = useState(initial)    
    const [stock] = useState(stockInit)


    const sumar = () => setContador(Number(contador) +1);

    const restar = () => setContador(Number(contador) -1);

    const onAdd = () => {
        if (Number(contador) > Number(stock)){
            alert("No tenemos esa cantidad");
            setContador(Number(stock));
            return
        }
        else if (Number(contador) < 0){
            alert("No puedes hacer eso");
            setContador(0);
            return
        }
        alert("Se ha añadido al carrito");
    };

    return(
        <div className="Producto">
            <h4>Pantalón Jean Blue</h4>
            <p> Stock:  { stock }</p>
            <div className="Contador">
                <button onClick={restar}>-</button>
                <p>{ contador }</p>
                <button onClick={sumar}>+</button>
            </div>
            <button className="AgregarCarrito" onClick={onAdd}>Agregar al carrito</button>

        </div>
    )
}

export default ItemCount;