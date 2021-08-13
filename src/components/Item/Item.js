import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({id, title, price, pictureUrl, stock}) => {
    return(
        <div className="ItemCard">
            <h3>{title}</h3>
            <img url={pictureUrl} alt={title}></img>
            <p>$ {price}</p>
            <ItemCount stockInit={stock} initial='1'/>
        </div>
    )
}

export default Item;
