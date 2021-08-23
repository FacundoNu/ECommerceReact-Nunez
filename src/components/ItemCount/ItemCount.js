import React, {useState} from 'react';

const ItemCount = ( { stockInit, initial } ) => {
    
    const [contador, setContador] = useState(initial)    
    const [stock] = useState(stockInit)


    const sumar = () => {
        if (contador > stock - 1) {
            alert("No tenemos más stock que eso");
            return;
        }
        else {
            setContador(contador + 1);
        }
    }

    const restar = () => {
        if (contador === 1) {
            alert("El mínimo de compra es 1");
            setContador(1);
            return;
        }
        else {
            setContador(contador - 1);
        }
    }

    const onAdd = () => {
        alert("Se ha añadido al carrito");
    };

    return(
        <div className="Producto">
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