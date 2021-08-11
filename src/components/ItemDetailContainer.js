import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import getItems from '../apis/promesa';

const ItemDetailContainer = (props) => {
    const [productos, setProductos] = useState([]);
         
    useEffect(() => {
        getItems().then(productos => {
            setProductos([productos.find( producto => producto.id === props.productoId )]);
        });
    },[]);

    return (
        <main>
            <h1>{props.greeting}</h1>
            {productos.map(producto => <ItemDetail key={producto.id} title={producto.title} description={producto.description} price={producto.price} pictureUrl={producto.pictureUrl} />)}
        </main>
    );
}

export default ItemDetailContainer;