import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import getItems from '../apis/dataBases';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const { itemId } = useParams();
    
    useEffect(() => {
        getItems().then(productos => {
            setProducto(<ItemDetail item={productos.find( item => item.id === Number(itemId))} />);
        });
        
    },[itemId]);

    return (
        <main>
            <h1>Medicamentos, productos de belleza y de cuidado de la piel</h1>
            {producto}
        </main>
    );
}

export default ItemDetailContainer;