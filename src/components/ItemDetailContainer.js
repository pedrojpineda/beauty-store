import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { listaProductos, getItems } from '../apis/promesa';

const ItemDetailContainer = (props) => {
    const [productos, setProductos] = useState(listaProductos);
    const [itemId, setItemId] = useState(2);
    
    let producto = productos.find( item => item.id === itemId );
    
    useEffect(() => {
        getItems.then();
    });

    return (
        <main>
            <h1>{props.greeting}</h1>
                <ItemDetail key={producto.id} title={producto.title} description={producto.description} price={producto.price} pictureUrl={producto.pictureUrl} />
        </main>
    );
}

export default ItemDetailContainer;