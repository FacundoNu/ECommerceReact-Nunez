import React from 'react';

const ItemDetail = ( {img, price, desc} ) => {
    return(
        <div className="ItemDetail">
            <img alt={desc} src={img}/>
            <h4>{desc}</h4>
            <br></br>
            <p>Precio: ${price}</p>
        </div>
    )
}

export default ItemDetail;
