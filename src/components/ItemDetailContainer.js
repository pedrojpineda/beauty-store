import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { getFirestore } from '../firebase';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const { itemId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = db.collection("items");
        const item = itemsCollection.doc(itemId);
        item.get().then(producto => {
            if (!producto.exists) {
                setProducto(<NotFound />);
                return;
            }
            setProducto(<ItemDetail item={{id: producto.id, ...producto.data()}} />);
        });

    }, [itemId]);

    return (
        <main>
            {producto}
        </main>
    );
}

export default ItemDetailContainer;