import React from 'react';
import styles from './ItemListConteiner.module.css'

const ItemListConteiner = ({greeting}) => {
    return (
        <div className={styles.container}>
            <h2>{greeting}</h2>
        </div>
    )
}

export default ItemListConteiner;