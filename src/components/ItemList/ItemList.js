import React from 'react';
import Item from '../Item/Item';

const ItemList = ( {items} ) => {
    return(
        <div className="ItemContenedor">
            {items && items.map((item) => {
                return(
                        <Item
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            pictureUrl={item.pictureUrl}
                        />
                )
            })}
        </div>
    )
}

export default ItemList;
