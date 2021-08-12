import React from 'react';
import Item from '../Item/Item';

const ItemList = ( {items} ) => {
    return(
        <div>
            {items.map((item) => {
                return(
                    <div key={item.id}>
                        <Item
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            pictureUrl={item.pictureUrl}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList;
