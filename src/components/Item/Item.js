import React from 'react';

const Item = ({id, title, price, pictureUrl}) => {
    return(
        <div className="ItemCard">
            <h3>{title}</h3>
            <img src={pictureUrl} alt="Imagen del producto"></img>
            <p>$ {price}</p>
        </div>
    )
}

export default Item;
