import React from 'react';
import Item from '../Item/Item';

const ItemList = ( {items} ) => {
    console.log(items);
    return(
        <div className="ItemContenedor">
            {items && items.map((item) => {
                return(
                        <Item
                            item = {item}
                        />
                )
            })}
        </div>
    )
}

export default ItemList;
