import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { getFirestore } from '../firebase';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const { itemId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = db.collection("items");
        const item = itemsCollection.doc(itemId);
        item.get().then(producto => {
            if (!producto.exists) {
                console.log("No se encontró el item");
                return;
            }
            setProducto(<ItemDetail item={{id: producto.id, ...producto.data()}} />);
        });

    }, [itemId]);

    return (
        <main>
            <h1>Medicamentos, productos de belleza y de cuidado de la piel</h1>
            {producto}
        </main>
    );
}

export default ItemDetailContainer;