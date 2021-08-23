import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemDetail from '../ItemDetail/ItemDetail';


const Item = ( {item} ) => {
    const {id, title, stock, description, pictureUrl, price} = item;
    const [showDetails, setShowDetails] = useState(false);

    return(
        <div className="ItemCard">
            <h3>{title}</h3>
            <button onClick={() => setShowDetails(!showDetails)}>Detalles</button>
            {showDetails && <ItemDetail img={pictureUrl} desc={description} price={price}/>}
            <ItemCount stockInit={stock} initial={1}/>
        </div>
    )
}

export default Item;
