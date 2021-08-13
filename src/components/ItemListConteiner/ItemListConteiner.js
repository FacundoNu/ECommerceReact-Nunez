import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { ItemsConst } from '../../constants/ItemsConst';


const ItemListConteiner = () => {

    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ItemsConst)
        }, 2000)
    })

    const [items, setItems] = useState();

    useEffect(() => {
        task.then((result) => {
            setItems(result)
            console.log({result})
        }).catch(e => {
            console.log(e)
        })
    }, [])

    return(<ItemList items={items} />)
            
}

export default ItemListConteiner;