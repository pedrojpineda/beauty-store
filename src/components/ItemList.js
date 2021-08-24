import React, { useState, useEffect } from 'react';
import Item from './Item';
import getItems from '../apis/dataBases';

const ItemList = ({categoria}) => {
    const [category, setCategory] = useState([]);
    const [categoryTitle, setCategoryTitle] = useState([]);
    
    const { key, id, categoryName } = categoria;

    useEffect(() => {
        getItems().then(productos => {
            setCategory(productos.filter(producto => producto.category == id).map(producto => <Item item={producto} />));
            setCategoryTitle(categoryName);
        });
    });

    return (
        <section className="categoria-productos">
            <div className="container">
                <h2>{categoryTitle}</h2>
                <div className="row flex">
                    {category}
                </div>
            </div>
        </section>
    );
}

export default ItemList;