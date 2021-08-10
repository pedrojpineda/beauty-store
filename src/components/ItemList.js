import React, { useState, useEffect } from 'react';
import Item from './Item';
import { listaProductos, getItems } from '../apis/promesa';

const ItemList = () => {
    const [productos, setProductos] = useState(listaProductos);

    useEffect(() => {
        getItems.then();
    });

    return (
        <section className="categoria-productos">
            <div className="container">
                <div className="row flex">
                    {productos.map(producto => <Item key={producto.id} title={producto.title} description={producto.description} price={producto.price} pictureUrl={producto.pictureUrl} />)}
                </div>
            </div>
        </section>
    );
}

export default ItemList;