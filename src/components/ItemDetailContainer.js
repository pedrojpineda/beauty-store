import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { listaProductos, promesa } from '../apis/promesa';

const ItemDetailContainer = (props) => {
    const [productos, setProductos] = useState(listaProductos);

    useEffect(() => {
        promesa.then();
    });

    return (
        <main>
            <h1>{props.greeting}</h1>
                {productos.filter(producto => <ItemDetail key={producto.id} title={producto.title} description={producto.description} price={producto.price} pictureUrl={producto.pictureUrl} />)}
        </main>
    );
}

export default ItemDetailContainer;